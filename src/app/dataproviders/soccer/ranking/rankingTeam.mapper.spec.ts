import {RankingTeamMapper} from './rankingTeam.mapper';
import {RankingTeamJson} from './rankingTeamJson.model';
import {RankingTeam} from '../../../core/domain/rankingTeam.model';

describe('RankingTeamMapper', () => {

    let mapper: RankingTeamMapper;

    beforeEach(() => {
        mapper = new RankingTeamMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: RankingTeamJson = {
            teamId: 9,
            teamName: 'SC Dahenfeld',
            teamLogo: 'image.png',
            matches: 8,
            wins: 5,
            draws: 0,
            losses: 3,
            goalsFor: 9,
            goalsAgainst: 24,
            goalsDiff: -15,
            points: 15
        };

        const expected: RankingTeam = new RankingTeam();
        expected.id = 9;
        expected.name = 'SC Dahenfeld';
        expected.image = 'image.png';
        expected.matches = 8;
        expected.wins = 5;
        expected.draws = 0;
        expected.losses = 3;
        expected.goalsFor = 9;
        expected.goalsAgainst = 24;
        expected.goalsDiff = -15;
        expected.points = 15;

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
