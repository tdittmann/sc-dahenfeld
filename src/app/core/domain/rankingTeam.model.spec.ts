import {RankingTeam} from './rankingTeam.model';

describe('RankingTeam', () => {

    it('should return true if favorite team', function () {
        const rankingTeam: RankingTeam = new RankingTeam();
        rankingTeam.name = 'SGM Dahenfeld';

        expect(rankingTeam.isFavoriteTeam()).toBeTruthy();
    });

    it('should return false if it is not the favorite team', function () {
        const rankingTeam: RankingTeam = new RankingTeam();
        rankingTeam.name = 'SGM Dahen';

        expect(rankingTeam.isFavoriteTeam()).toBeFalsy();
    });

    it('should return -1 if points are higher than others', function () {
        const first: RankingTeam = new RankingTeam();
        first.points = 5;

        const second: RankingTeam = new RankingTeam();
        second.points = 4;

        expect(first.compareTo(second)).toBe(-1);
    });

    it('should return 1 if points are lower than others', function () {
        const first: RankingTeam = new RankingTeam();
        first.points = 5;

        const second: RankingTeam = new RankingTeam();
        second.points = 6;

        expect(first.compareTo(second)).toBe(1);
    });

    it('should return -1 if points are equal but goalsdiff is higher than others', function () {
        const first: RankingTeam = new RankingTeam();
        first.points = 5;
        first.goalsFor = 5;
        first.goalsAgainst = 0;

        const second: RankingTeam = new RankingTeam();
        second.points = 5;
        second.goalsFor = 2;
        second.goalsAgainst = 0;

        expect(first.compareTo(second)).toBe(-1);
    });

    it('should return 1 if points are equal but goalsdiff is lower than others', function () {
        const first: RankingTeam = new RankingTeam();
        first.points = 5;
        first.goalsFor = 5;
        first.goalsAgainst = 0;

        const second: RankingTeam = new RankingTeam();
        second.points = 5;
        second.goalsFor = 7;
        second.goalsAgainst = 0;

        expect(first.compareTo(second)).toBe(1);
    });

    it('should return -1 if points and goalsDiff are equal but goalsFor is higher than others', function () {
        const first: RankingTeam = new RankingTeam();
        first.points = 5;
        first.goalsFor = 5;
        first.goalsAgainst = 2;

        const second: RankingTeam = new RankingTeam();
        second.points = 5;
        second.goalsFor = 3;
        second.goalsAgainst = 0;

        expect(first.compareTo(second)).toBe(-1);
    });

    it('should return 1 if points and goalsDiff are equal but goalsFor is lower than others', function () {
        const first: RankingTeam = new RankingTeam();
        first.points = 5;
        first.goalsFor = 3;
        first.goalsAgainst = 0;

        const second: RankingTeam = new RankingTeam();
        second.points = 5;
        second.goalsFor = 5;
        second.goalsAgainst = 2;

        expect(first.compareTo(second)).toBe(1);
    });

    it('should return 0 if points, goalsDiff and goalsFor are equal', function () {
        const first: RankingTeam = new RankingTeam();
        first.points = 5;
        first.goalsFor = 3;
        first.goalsAgainst = 0;

        const second: RankingTeam = new RankingTeam();
        second.points = 5;
        second.goalsFor = 3;
        second.goalsAgainst = 0;

        expect(first.compareTo(second)).toBe(0);
    });

});
