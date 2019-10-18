import {Component, OnInit} from '@angular/core';
import {Birthday} from '../../../core/domain/birthday.model';
import {BirthdayService} from '../../../dataproviders/birthday/birthday.service';
import {PersonPage} from '../person/person.page';
import {ModalController} from '@ionic/angular';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';

@Component({
    templateUrl: 'birthdays.page.html',
    styleUrls: ['birthdays.page.scss']
})
export class BirthdaysPage implements OnInit {

    birthdays: Birthday[] = [];
    filter = '';

    constructor(private birthdayService: BirthdayService,
                private modalController: ModalController,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        this.birthdayService.loadBirthdays().subscribe(
            (birthdays) => {
                this.birthdays = birthdays;

                this.loadingService.hideLoading();
            },
            (error) => this.errorService.showError(error)
        );
    }

    openPerson(personId: number) {
        this.modalController.create({
            component: PersonPage,
            componentProps: {
                'personId': personId
            }
        }).then(modal => modal.present());
    }

}
