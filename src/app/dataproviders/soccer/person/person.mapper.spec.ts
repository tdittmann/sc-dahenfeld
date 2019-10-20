import {PersonMapper} from './person.mapper';
import {PersonJson} from './personJson.model';
import {Person} from '../../../core/domain/person.model';
import {DateUtils} from '../../../util/DateUtils';
import {PersonStatistic} from '../../../core/domain/personStatistic.model';

describe('PersonMapper', () => {

    let mapper: PersonMapper;

    beforeEach(() => {
        mapper = new PersonMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: PersonJson = {
            person_id: 1,
            firstname: 'Thorsten',
            lastname: 'Krause',
            image: 'img.png',
            position: 'Sturm',
            birthday: '1999-01-02',
            jerseynumber: '8',
            seasonStats: {
                yellowCards: 4,
                yellowRedCards: 0,
                redCards: 0,
                goals: 4,
                matches: 27,
                starting: 26,
                cameIn: 1,
                cameOut: 7,
                playingMinutes: 2302
            },
            careerStats: {
                yellowCards: 24,
                yellowRedCards: 0,
                redCards: 0,
                goals: 64,
                matches: 160,
                starting: 159,
                cameIn: 1,
                cameOut: 14,
                playingMinutes: 14133
            }
        };

        const expectedSeasonStats = new PersonStatistic();
        expectedSeasonStats.yellowCards = 4;
        expectedSeasonStats.yellowRedCards = 0;
        expectedSeasonStats.redCards = 0;
        expectedSeasonStats.goals = 4;
        expectedSeasonStats.matches = 27;
        expectedSeasonStats.starting = 26;
        expectedSeasonStats.cameIn = 1;
        expectedSeasonStats.cameOut = 7;
        expectedSeasonStats.playingMinutes = 2302;

        const expectedCareerStats = new PersonStatistic();
        expectedCareerStats.yellowCards = 24;
        expectedCareerStats.yellowRedCards = 0;
        expectedCareerStats.redCards = 0;
        expectedCareerStats.goals = 64;
        expectedCareerStats.matches = 160;
        expectedCareerStats.starting = 159;
        expectedCareerStats.cameIn = 1;
        expectedCareerStats.cameOut = 14;
        expectedCareerStats.playingMinutes = 14133;

        const expected: Person = new Person();
        expected.id = 1;
        expected.firstname = 'Thorsten';
        expected.lastname = 'Krause';
        expected.image = 'img.png';
        expected.position = 'Sturm';
        expected.birthday = DateUtils.ofIsoDate('1999-01-02');
        expected.jerseynumber = 8;
        expected.seasonStatistic = expectedSeasonStats;
        expected.careerStatistic = expectedCareerStats;

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
