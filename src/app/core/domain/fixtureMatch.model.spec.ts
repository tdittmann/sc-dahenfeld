import * as moment from 'moment';
import {FixtureMatch} from './fixtureMatch.model';

describe('FixtureMatch', () => {

    it('should return -1 if current calendarEntry is before overgiven calendarEntry', function () {
        const first: FixtureMatch = new FixtureMatch();
        first.date = moment().add(1, 'days').startOf('day');

        const second: FixtureMatch = new FixtureMatch();
        second.date = moment().add(2, 'days').startOf('day');

        expect(first.compareTo(second)).toBe(-1);
    });

    it('should return 1 if current calendarEntry is after overgiven calendarEntry', function () {
        const first: FixtureMatch = new FixtureMatch();
        first.date = moment().add(2, 'days').startOf('day');

        const second: FixtureMatch = new FixtureMatch();
        second.date = moment().add(1, 'days').startOf('day');

        expect(first.compareTo(second)).toBe(1);
    });

    it('should return 0 if current calendarEntry is equal overgiven calendarEntry', function () {
        const first: FixtureMatch = new FixtureMatch();
        first.date = moment().add(1, 'days').startOf('day');

        const second: FixtureMatch = new FixtureMatch();
        second.date = moment().add(1, 'days').startOf('day');

        expect(first.compareTo(second)).toBe(0);
    });

    it('should return an empty string if no date is set', function () {
        const fixtureMatch: FixtureMatch = new FixtureMatch();

        expect(fixtureMatch.getStartDate()).toBe('');
    });

    it('should return an formatted string if date is present', function () {
        const fixtureMatch: FixtureMatch = new FixtureMatch();
        fixtureMatch.date = moment('1995-12-25');

        expect(fixtureMatch.getStartDate()).toBe('25. December');
    });

});
