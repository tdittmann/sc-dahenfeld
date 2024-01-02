import {Moment} from 'moment';
import {environment} from '../../../environments/environment';
import {MatchPlayer} from './matchPlayer.model';
import {MatchEvent} from './matchEvent.model';

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

    lineup: MatchPlayer[] = [];
    events: MatchEvent[] = [];

    getHomeResult(): string {
        if (isNaN(this.homeResult)) {
            return '-';
        }

        return String(this.homeResult);
    }

    getAwayResult(): string {
        if (isNaN(this.awayResult)) {
            return '-';
        }

        return String(this.awayResult);
    }

    getKickOffDate(): string {
        if (this.date) {
            const date = this.date.format(environment.longDateFormat);
            const time = this.date.format(environment.timeFormat);
            return `${date} um ${time} Uhr`;
        }

        return '';
    }

    isHomeWin(): boolean {
        return this.homeResult > this.awayResult;
    }

    isAwayWin(): boolean {
        return this.homeResult < this.awayResult;
    }

    getSubstitutions(): MatchEvent[] {
        return this.events.filter(value => value.cameInForFirstname !== undefined);
    }

}
