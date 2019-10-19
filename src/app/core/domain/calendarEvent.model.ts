import {Moment} from 'moment';
import {CalendarEntry} from './calendarEntry.model';
import {TextUtils} from '../../util/TextUtils';

export class CalendarEvent extends CalendarEntry {

    title: string;
    end: Moment;
    image: string;
    text: string;
    hits: string;

    public getImageAsBackground(): string {
        return TextUtils.getAsBackgroundUrl(this.image);
    }

}
