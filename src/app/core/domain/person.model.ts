import {Moment} from 'moment';
import {PersonStatistic} from './personStatistic.model';
import {TextUtils} from '../../util/TextUtils';
import {DateUtils} from '../../util/DateUtils';
import {environment} from '../../../environments/environment';

// TODO tdit0703: Tests
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

    public getName(): string {
        return [this.firstname, this.lastname].filter(Boolean).join(' ');
    }

    public getAge(): number {
        return DateUtils.diffYears(this.birthday);
    }

    public getFormattedBirthday(): string {
        return this.birthday
            .format(environment.longDateFormat);
    }

    public getImageAsBackground(): string {
        return TextUtils.getAsBackgroundUrl(this.image);
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
