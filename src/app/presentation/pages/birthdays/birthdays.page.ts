import {Component, OnInit} from '@angular/core';
import {Birthday} from '../../../core/domain/birthday.model';
import {BirthdayService} from '../../../dataproviders/birthday/birthday.service';
import {PersonPage} from '../person/person.page';
import {ModalController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'birthdays.page.html',
    styleUrls: ['birthdays.page.scss']
})
export class BirthdaysPage implements OnInit {

    heading: string;
    birthdays: Birthday[] = [];
    filter = '';

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private birthdayService: BirthdayService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.birthdayService.loadBirthdays().subscribe(
            (birthdays) => {
                this.birthdays = birthdays;

                this.isLoading = false;
            },
            (error) => {
                this.isError = true;
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
