import * as moment from 'moment';
import { Match } from './match.model';

describe('Match', () => {
  it('should return -1 if current calendarEntry is before overgiven calendarEntry', function () {
    const first: Match = new Match();
    first.date = moment().add(1, 'days').startOf('day');

    const second: Match = new Match();
    second.date = moment().add(2, 'days').startOf('day');

    expect(first.compareTo(second)).toBe(-1);
  });

  it('should return 1 if current calendarEntry is after overgiven calendarEntry', function () {
    const first: Match = new Match();
    first.date = moment().add(2, 'days').startOf('day');

    const second: Match = new Match();
    second.date = moment().add(1, 'days').startOf('day');

    expect(first.compareTo(second)).toBe(1);
  });

  it('should return 0 if current calendarEntry is equal overgiven calendarEntry', function () {
    const first: Match = new Match();
    first.date = moment().add(1, 'days').startOf('day');

    const second: Match = new Match();
    second.date = moment().add(1, 'days').startOf('day');

    expect(first.compareTo(second)).toBe(0);
  });

  it('should return an empty string if no date is set', function () {
    const fixtureMatch: Match = new Match();

    expect(fixtureMatch.getStartDate()).toBe('');
  });

  it('should return an formatted string if date is present', function () {
    const fixtureMatch: Match = new Match();
    fixtureMatch.date = moment('1995-12-25');

    expect(fixtureMatch.getStartDate()).toBe('25. December');
  });
});
