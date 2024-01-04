import { CalendarEvent } from './calendarEvent.model';
import * as moment from 'moment';

describe('CalendarEvent', () => {
  it('should return the image background url', function () {
    const calendarEntry: CalendarEvent = new CalendarEvent();
    calendarEntry.image = 'something.jpg';

    expect(calendarEntry.getImageAsBackground()).toBe("url('something.jpg')");
  });

  it('should return an empty string if no start and end date is present', function () {
    const calendarEntry: CalendarEvent = new CalendarEvent();

    expect(calendarEntry.getEventDurationAsString()).toBe('');
  });

  it('should return only start date if no end is present', function () {
    const calendarEntry: CalendarEvent = new CalendarEvent();
    calendarEntry.start = moment('2019-01-15');

    expect(calendarEntry.getEventDurationAsString()).toBe('15. January 2019');
  });

  it('should return start and end date', function () {
    const calendarEntry: CalendarEvent = new CalendarEvent();
    calendarEntry.start = moment('2019-01-15');
    calendarEntry.end = moment('2019-01-17');

    expect(calendarEntry.getEventDurationAsString()).toBe('15. January - 17. January 2019');
  });
});
