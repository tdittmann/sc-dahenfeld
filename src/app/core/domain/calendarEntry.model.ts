import {Moment} from 'moment';
import {CalendarType} from './calendarType.model';
import {environment} from '../../../environments/environment';

// TODO tdit0703: Tests
export abstract class CalendarEntry {

    id: number;
    type: CalendarType;
    start: Moment;
    location: string;

    public getFormattedStartDate(): string {
        if (!this.start) {
            return '';
        }

        return this.start
            .format(environment.longDateFormat);
    }

    public getFormattedStartTime(): string {
        if (!this.start) {
            return '';
        }

        return this.start
            .format('HH:mm');
    }

    public isMatch(): boolean {
        return this.type === CalendarType.MATCH;
    }

    public isEvent(): boolean {
        return this.type === CalendarType.EVENT;
    }

    public compareTo(calendarEntry: CalendarEntry): number {
        if (this.start.isBefore(calendarEntry.start)) {
            return -1;
        }
        if (this.start.isAfter(calendarEntry.start)) {
            return 1;
        }
        return 0;
    }
}
