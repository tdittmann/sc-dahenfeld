import {Component, OnInit} from '@angular/core';
import {Birthday} from '../../../core/domain/birthday.model';
import {BirthdayService} from '../../../dataproviders/birthday/birthday.service';

@Component({
    selector: 'birthdays',
    templateUrl: 'birthdays.page.html',
    styleUrls: ['birthdays.page.scss']
})
// TODO tdit0703: Link to player page
export class BirthdaysPage implements OnInit {

    birthdays: Birthday[] = [];
    filter = '';

    constructor(private birthdayService: BirthdayService) {

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

}
