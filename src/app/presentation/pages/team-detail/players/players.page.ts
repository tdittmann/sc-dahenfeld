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

    players: Person[] = [];
    lastPosition: string = null;

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
                        this.players = players;

                        if (this.players.length <= 0) {
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

    public isDifferentPosition(pPlayer: Person): boolean {
        const showHeader = (pPlayer.position !== this.lastPosition);
        this.lastPosition = pPlayer.position;
        return showHeader;
    }

}
