import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {Person} from '../../../core/domain/person.model';
import {DevService} from '../../../dataproviders/dev.service';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';

@Component({
    templateUrl: 'person.page.html',
    styleUrls: ['person.page.scss']
})
export class PersonPage implements OnInit {

    @Input() personId: number;

    person: Person;

    constructor(private modalController: ModalController,
                private playerService: PersonService,
                private devService: DevService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {

        this.playerService.loadPerson(this.personId).subscribe(
            person => {
                this.person = person;

                this.loadingService.hideLoading();
            },
            error => this.errorService.showError(error)
        );

    }

    public isDevModeEnabled(): boolean {
        return this.devService.isDevModeEnabled();
    }

    public closeModal() {
        return this.modalController.dismiss();
    }

}
