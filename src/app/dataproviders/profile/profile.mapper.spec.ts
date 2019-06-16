import {ProfileMapper} from './profile.mapper';
import {ProfileJson} from './profileJson.model';
import {Profile} from '../../core/domain/profile.model';

describe('ProfileMapper', () => {

    let mapper: ProfileMapper;

    beforeEach(() => {
        mapper = new ProfileMapper();
    });

    it('should handle null values for mapTo', () => {
        expect(mapper.mapTo(null)).toBe(null);
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: ProfileJson = {
            pushToken: 'lorem-ipsum',
            name: 'unknown',
            pushBirthdays: true
        };

        const expected: Profile = new Profile();
        expected.pushToken = 'lorem-ipsum';
        expected.name = 'unknown';
        expected.pushBirthdays = true;

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

    it('should map from json to core model', () => {
        const actual: Profile = new Profile();
        actual.pushToken = 'lorem-ipsum';
        actual.name = 'unknown';
        actual.pushBirthdays = true;

        const expected: ProfileJson = {
            pushToken: 'lorem-ipsum',
            name: 'unknown',
            pushBirthdays: true
        };

        expect(mapper.mapTo(actual)).toEqual(expected);
    });

});
