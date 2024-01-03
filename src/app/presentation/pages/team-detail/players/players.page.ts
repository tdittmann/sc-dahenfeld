import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {Person} from '../../../../core/domain/person.model';
import {ModalController} from '@ionic/angular';
import {PersonPage} from '../../person/person.page';

@Component({
    selector: 'players',
    templateUrl: 'players.page.html',
    styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit {

    private projectId: number;

    players: Map<string, Person[]> = new Map<string, Person[]>();

    isLoading = true;
    errorMessage = 'Daten konnten nicht geladen werden';
    isError = false;

    constructor(private route: ActivatedRoute,
                private playerService: PersonService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const projectId = params['id'];
                this.projectId = projectId;

                this.playerService.loadPersonsByProjectId(projectId).subscribe({
                    next: players => {
                        this.players = this.groupBy(players, player => player.position);

                        if (this.players.size <= 0) {
                            this.isError = true;
                            this.errorMessage = 'Für diese Spielzeit gibt es keinen Kader';
                        }

                        this.isLoading = false;
                    },
                    error: error => {
                        this.isError = true;
                        console.error(error);
                    }

                });
            }
        );
    }

    public openPlayer(personId: number) {
        this.modalController.create({
            component: PersonPage,
            componentProps: {
                'personId': personId,
                'projectId': this.projectId
            }
        }).then(modal => modal.present());
    }

    returnZero() {
        return 0;
    }

    private groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

}
