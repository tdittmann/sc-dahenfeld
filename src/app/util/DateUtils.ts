import * as moment from 'moment';
import {Moment} from 'moment';

export class DateUtils {

    // TODO tdit0703: Tests
    public static diffYears(pDate: Moment): number {
        return moment()
            .startOf('day')
            .diff(pDate, 'years');
    }

    // TODO tdit0703: Tests
    public static diffDays(pDate: Moment): number {
        return Math.abs(moment()
            .startOf('day')
            .diff(pDate, 'days'));
    }

    // TODO tdit0703: Tests
    public static ofIsoDate(pDate: string): Moment {
        return this.ofPattern(pDate, 'YYYY-MM-DD');
    }

    // TODO tdit0703: Tests
    public static ofPattern(pDate: string, pFormat: string): Moment {
        return moment(pDate, pFormat)
            .locale('de');
    }

    public static ofUnixTimestampString(pDate: string): Moment {
        if (!pDate) {
            return undefined;
        }

        return this.ofUnixTimestampNumber(parseInt(pDate, 10));
    }

    public static ofUnixTimestampNumber(pDate: number): Moment {
        if (!pDate) {
            return undefined;
        }

        return this.ofDate(new Date(pDate));
    }

    public static ofDate(pDate: Date): Moment {
        if (!pDate) {
            return undefined;
        }

        return moment(pDate)
            .locale('de');
    }

}
