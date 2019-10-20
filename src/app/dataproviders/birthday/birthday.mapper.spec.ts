import {DateUtils} from '../../util/DateUtils';
import {BirthdayMapper} from './birthday.mapper';
import {BirthdayJson} from './birthdayJson.model';
import {Birthday} from '../../core/domain/birthday.model';

describe('BirthdayMapper', () => {

    let mapper: BirthdayMapper;

    beforeEach(() => {
        mapper = new BirthdayMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: BirthdayJson = {
            personId: '1',
            firstname: 'Marc',
            lastname: 'Hornberg',
            date: '1994-03-07',
            picture: 'marc_hornberg.jpg'
        };

        const expected: Birthday = new Birthday();
        expected.personId = 1;
        expected.firstname = 'Marc';
        expected.lastname = 'Hornberg';
        expected.birthday = DateUtils.ofIsoDate('1994-03-07');
        expected.image = 'marc_hornberg.jpg';

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
