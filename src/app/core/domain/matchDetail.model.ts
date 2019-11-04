import {Moment} from 'moment';
import {environment} from '../../../environments/environment';

export class MatchDetail {

    matchId: number;
    date: Moment;
    location: string;
    fixture: string;

    homeId: number;
    homeName: string;
    homeImage: string;
    homeResult: number;

    awayId: number;
    awayName: string;
    awayImage: string;
    awayResult: number;

    events: MatchEvent[] = [];

    getResult(): string {
        if (Number.isInteger(this.homeResult) && Number.isInteger(this.awayResult)) {
            return this.homeResult + ' : ' + this.awayResult;
        }

        return '- : -';
    }

    getKickOffDate(): string {
        if (this.date) {
            return this.date
                .format(environment.longDateFormat);
        }

        return '';
    }

    getKickOffTime(): string {
        if (this.date) {
            return this.date
                .format(environment.timeFormat);
        }

        return '';
    }

}

export class MatchEvent {

    clubId: number;
    teamplayerId: number;
    firstname: string;
    lastname: string;
    time: number;
    icon: string;
    cameInForFirstname: string;
    cameInForLastname: string;

}
