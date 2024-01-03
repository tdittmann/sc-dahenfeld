import * as moment from 'moment';
import {Moment} from 'moment';
import {PersonStatistic} from './personStatistic.model';
import {TextUtils} from '../../util/TextUtils';
import {DateUtils} from '../../util/DateUtils';
import {environment} from '../../../environments/environment';

export class Person {

    id: number;
    firstname: string;
    lastname: string;
    image: string;
    position: string;
    birthday: Moment;
    jerseynumber: number;

    seasonStatistic: PersonStatistic;
    careerStatistic: PersonStatistic;

    public get name(): string {
        return [this.firstname, this.lastname].filter(Boolean).join(' ');
    }

    public isKeeper(): boolean {
        return this.position === 'Torhüter';
    }

    public isTodaysBirthday(): boolean {
        const thisYearsBirthday: Moment = moment(this.birthday)
            .year(new Date().getFullYear());
        const today = moment().startOf('day');

        return today.isSame(thisYearsBirthday);
    }

    public get age(): number {
        return DateUtils.diffYears(this.birthday);
    }

    public get formattedBirthday(): string {
        return this.birthday
            .format(environment.longDateFormat);
    }

    public get imageAsBackground(): string {
        return TextUtils.getAsBackgroundUrl(this.image);
    }

    public get birthdaySubtitle(): string {
        let age: number = this.age;

        // Birthday is today
        if (this.isTodaysBirthday()) {
            return 'Feiert heute den ' + age + '. Geburtstag';
        }

        // Birthday was already or will be so we need to increment age
        age++;

        const daysUntilBirthday = this.daysTillBirthday;
        return 'Wird in ' + daysUntilBirthday + ' Tag(en) ' + age + ' Jahre alt';
    }

    public get daysTillBirthday(): number {
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

    public compareTo(pPerson: Person): number {
        const positionOrder = ['Torhüter', 'Abwehr', 'Mittelfeld', 'Sturm'];

        // First order by position
        if (positionOrder.indexOf(this.position) < positionOrder.indexOf(pPerson.position)) {
            return -1;
        } else if (positionOrder.indexOf(this.position) > positionOrder.indexOf(pPerson.position)) {
            return 1;
        }

        // Then order by lastname
        if (this.lastname.toLowerCase() < pPerson.lastname.toLowerCase()) {
            return -1;
        }
        if (this.lastname.toLowerCase() > pPerson.lastname.toLowerCase()) {
            return 1;
        }

        return 0;
    }


}
