import * as moment from 'moment';
import {Moment} from 'moment';

export class MomentWrapper {

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
