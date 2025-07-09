import moment from "moment";
import { CalendarEntry } from './calendarEntry.model';
import { CalendarEvent } from './calendarEvent.model';
import { CalendarMatch } from './calendarMatch.model';
import { CalendarType } from './calendarType.model';

describe('CalendarEntry', () => {
  it('should return -1 if current calendarEntry is before overgiven calendarEntry', function () {
    const first: CalendarEntry = new CalendarEvent();
    first.start = moment().add(1, 'days').startOf('day');

    const second: CalendarEntry = new CalendarMatch();
    second.start = moment().add(2, 'days').startOf('day');

    expect(first.compareTo(second)).toBe(-1);
  });

  it('should return 1 if current calendarEntry is after overgiven calendarEntry', function () {
    const first: CalendarEntry = new CalendarEvent();
    first.start = moment().add(2, 'days').startOf('day');

    const second: CalendarEntry = new CalendarMatch();
    second.start = moment().add(1, 'days').startOf('day');

    expect(first.compareTo(second)).toBe(1);
  });

  it('should return 0 if current calendarEntry is equal overgiven calendarEntry', function () {
    const first: CalendarEntry = new CalendarEvent();
    first.start = moment().add(1, 'days').startOf('day');

    const second: CalendarEntry = new CalendarMatch();
    second.start = moment().add(1, 'days').startOf('day');

    expect(first.compareTo(second)).toBe(0);
  });

  it('should return true if calendarEntry is a match', function () {
    const calendarEntry: CalendarEntry = new CalendarMatch();
    calendarEntry.type = CalendarType.MATCH;

    expect(calendarEntry.isMatch()).toBeTruthy();
  });

  it('should return true if calendarEntry is not a match', function () {
    const calendarEntry: CalendarEntry = new CalendarMatch();
    calendarEntry.type = CalendarType.EVENT;

    expect(calendarEntry.isMatch()).toBeFalsy();
  });

  it('should return true if calendarEntry is a event', function () {
    const calendarEntry: CalendarEntry = new CalendarMatch();
    calendarEntry.type = CalendarType.EVENT;

    expect(calendarEntry.isEvent()).toBeTruthy();
  });

  it('should return true if calendarEntry is not a event', function () {
    const calendarEntry: CalendarEntry = new CalendarMatch();
    calendarEntry.type = CalendarType.MATCH;

    expect(calendarEntry.isEvent()).toBeFalsy();
  });

  it('should return an empty string if no date is set', function () {
    const calendarEntry: CalendarEntry = new CalendarMatch();

    expect(calendarEntry.getFormattedStartDate()).toBe('');
  });

  it('should return an formatted string if date is present', function () {
    const calendarEntry: CalendarEntry = new CalendarMatch();
    calendarEntry.start = moment('1995-12-25');

    expect(calendarEntry.getFormattedStartDate()).toBe('25. December 1995');
  });
});
