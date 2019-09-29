import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PlayerService} from '../../../dataproviders/soccer/players/player.service';
import {Player} from '../../../core/domain/player.model';
import {DevService} from '../../../dataproviders/dev.service';

@Component({
    templateUrl: 'person.page.html',
    styleUrls: ['person.page.scss']
})
export class PersonPage implements OnInit {

    @Input() personId: number;

    person: Player;

    constructor(private modalController: ModalController,
                private playerService: PlayerService,
                private devService: DevService) {

    }

    ngOnInit(): void {

        this.playerService.loadPerson(this.personId).subscribe(
            person => {
                this.person = person;
            },
            error => {
                // TODO tdit0703: Error handling
                console.error(error);
            }
        );

    }

    public isDevModeEnabled(): boolean {
        return this.devService.isDevModeEnabled();
    }

    public closeModal() {
        return this.modalController.dismiss();
    }

}
