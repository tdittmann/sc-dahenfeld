import * as moment from 'moment';
import {Moment} from 'moment';
import {environment} from '../../../environments/environment';
import {DateUtils} from '../../util/DateUtils';

// TODO tdit0703: Tests
export class Birthday {

    personId: number;
    firstname: string;
    lastname: string;
    birthday: Moment;
    image: string;

    public getName(): string {
        return [this.firstname, this.lastname]
            .filter(Boolean)
            .join(' ');
    }

    public getFormattedDate(): string {
        if (!this.birthday) {
            return '';
        }

        return this.birthday
            .format(environment.longDateFormat);
    }

    public getSubtitle(): string {
        let age: number = this.getAge();

        // Birthday is today
        if (this.isToday()) {
            return 'Feiert heute den ' + age + '. Geburtstag';
        }

        // Birthday was already or will be so we need to increment age
        age++;

        const daysUntilBirthday = this.getDaysTillBirthday();
        return 'Wird in ' + daysUntilBirthday + ' Tag(en) ' + age + ' Jahre alt';
    }

    public isToday(): boolean {
        const thisYearsBirthday: Moment = moment(this.birthday)
            .year(new Date().getFullYear());
        const today = moment().startOf('day');

        return today.isSame(thisYearsBirthday);
    }

    public getAge(): number {
        return DateUtils.diffYears(this.birthday);
    }

    public compareTo(pBirthday: Birthday): number {
        if (this.getDaysTillBirthday() < pBirthday.getDaysTillBirthday()) {
            return -1;
        }
        if (this.getDaysTillBirthday() > pBirthday.getDaysTillBirthday()) {
            return 1;
        }
        return 0;
    }

    getDaysTillBirthday(): number {
        const todaysYear: number = new Date().getFullYear();
        const thisYearsBirthday: Moment = moment(this.birthday)
            .year(todaysYear);
        const today = moment().startOf('day');

        // Birthday was between beginning of this year and now so we need to increment the year
        if (today.isAfter(thisYearsBirthday)) {
            thisYearsBirthday.year(todaysYear + 1);
        }

        return DateUtils.diffDays(thisYearsBirthday);
    }

}
