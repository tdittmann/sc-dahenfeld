import { Moment } from 'moment';
import { CalendarEntry } from './calendarEntry.model';
import { TextUtils } from '../../util/TextUtils';
import { environment } from '../../../environments/environment';

export class CalendarEvent extends CalendarEntry {
  title: string;
  end: Moment;
  image: string;
  text: string;
  hits: string;

  public getImageAsBackground(): string {
    return TextUtils.getAsBackgroundUrl(this.image);
  }

  public getEventDurationAsString(): string {
    if (!this.start && !this.end) {
      return '';
    }

    if (this.end) {
      return this.start.format(environment.shortDateFormat) + ' - ' + this.end.format(environment.longDateFormat);
    }

    return this.getFormattedStartDate();
  }
}
