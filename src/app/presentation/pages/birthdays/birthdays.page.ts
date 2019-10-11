import {Component, OnInit} from '@angular/core';
import {Birthday} from '../../../core/domain/birthday.model';
import {BirthdayService} from '../../../dataproviders/birthday/birthday.service';
import {PersonPage} from '../person/person.page';
import {ModalController} from '@ionic/angular';

@Component({
    templateUrl: 'birthdays.page.html',
    styleUrls: ['birthdays.page.scss']
})
export class BirthdaysPage implements OnInit {

    birthdays: Birthday[] = [];
    filter = '';

    constructor(private birthdayService: BirthdayService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {
        this.birthdayService.loadBirthdays()
            .subscribe(
                (birthdays: Birthday[]) => {
                    this.birthdays = birthdays;
                },
                (error) => {
                    // TODO tdit0703: error handling
                    console.error(error);
                }
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
