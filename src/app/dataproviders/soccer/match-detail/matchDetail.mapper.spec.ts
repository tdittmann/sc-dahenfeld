import {MatchDetailMapper} from './matchDetail.mapper';
import {MatchDetailJson} from './matchDetailJson';
import {MatchDetail} from '../../../core/domain/matchDetail.model';
import {DateUtils} from '../../../util/DateUtils';
import {MatchEvent} from '../../../core/domain/matchEvent.model';

describe('MatchDetailMapper', () => {

    let mapper: MatchDetailMapper;

    beforeEach(() => {
        mapper = new MatchDetailMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: MatchDetailJson = {
            matchId: '1234',
            date: '1566738000000',
            location: 'Dahenfeld',
            fixture: '1. Spieltag',
            home_id: '1',
            home_name: 'SGM Typescript',
            home_logo: 'home-logo.png',
            home_result: '5',
            away_id: '2',
            away_name: 'SGM Javascript',
            away_logo: 'away-logo.png',
            away_result: '1',
            lineup: [],
            events: [
                {
                    clubId: '1',
                    teamplayerId: '123',
                    firstname: 'Hans',
                    lastname: 'Wurst',
                    time: '25',
                    icon: 'yellow-card.png',
                    cameInForFirstname: 'Lurch',
                    cameInForLastname: 'Laber',
                }
            ]
        };

        const expectedEvent: MatchEvent = new MatchEvent();
        expectedEvent.clubId = 1;
        expectedEvent.teamplayerId = 123;
        expectedEvent.firstname = 'Hans';
        expectedEvent.lastname = 'Wurst';
        expectedEvent.time = 25;
        expectedEvent.icon = 'yellow-card.png';
        expectedEvent.cameInForFirstname = 'Lurch';
        expectedEvent.cameInForLastname = 'Laber';

        const expected: MatchDetail = new MatchDetail();
        expected.matchId = 1234;
        expected.date = DateUtils.ofUnixTimestampString('1566738000000');
        expected.location = 'Dahenfeld';
        expected.fixture = '1. Spieltag';
        expected.homeId = 1;
        expected.homeName = 'SGM Typescript';
        expected.homeImage = 'home-logo.png';
        expected.homeResult = 5;
        expected.awayId = 2;
        expected.awayName = 'SGM Javascript';
        expected.awayImage = 'away-logo.png';
        expected.awayResult = 1;
        expected.events = [expectedEvent];

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
