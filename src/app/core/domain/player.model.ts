import {Moment} from 'moment';
import {PlayerStatistic} from './playerStatistic.model';
import {TextUtils} from '../../util/TextUtils';
import {DateUtils} from '../../util/DateUtils';
import {environment} from '../../../environments/environment';

// TODO tdit0703: Tests
// TODO tdit0703: rename to person?
export class Player {

    id: number;
    firstname: string;
    lastname: string;
    image: string;
    position: string;
    birthday: Moment;
    jerseynumber: number;

    seasonStatistic: PlayerStatistic;
    careerStatistic: PlayerStatistic;

    public getName(): string {
        return this.firstname + ' ' + this.lastname;
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

    public compareTo(pPlayer: Player): number {
        const positionOrder = ['Torhüter', 'Abwehr', 'Mittelfeld', 'Sturm'];

        // First order by position
        if (positionOrder.indexOf(this.position) < positionOrder.indexOf(pPlayer.position)) {
            return -1;
        } else if (positionOrder.indexOf(this.position) > positionOrder.indexOf(pPlayer.position)) {
            return 1;
        }

        // Then order by lastname
        if (this.lastname.toLowerCase() < pPlayer.lastname.toLowerCase()) {
            return -1;
        }
        if (this.lastname.toLowerCase() > pPlayer.lastname.toLowerCase()) {
            return 1;
        }

        return 0;
    }


}
