import {Moment} from 'moment';
import {environment} from '../../../environments/environment';

export class FixtureMatch {

    id: number;
    projectId: number;
    date: Moment;
    fixture: string;
    location: string;

    homeId: number;
    homeName: string;
    homeImage: string;
    homeResult: number;

    awayId: number;
    awayName: string;
    awayImage: string;
    awayResult: number;

    public getStartDate(): string {
        if (!this.date) {
            return '';
        }

        return this.date
            .format(environment.shortDateFormat);
    }

    public compareTo(fixtureMatch: FixtureMatch): number {
        if (this.date.isBefore(fixtureMatch.date)) {
            return -1;
        } else if (this.date.isAfter(fixtureMatch.date)) {
            return 1;
        }

        return 0;
    }

}
