import { MatchDetailMapper } from './matchDetail.mapper';
import { MatchDetailJson } from './matchDetailJson';
import { MatchDetail } from '../../../core/domain/matchDetail.model';
import { DateUtils } from '../../../util/DateUtils';
import { MatchEvent } from '../../../core/domain/matchEvent.model';
import { MatchPlayer } from '../../../core/domain/matchPlayer.model';

describe('MatchDetailMapper', () => {
  let mapper: MatchDetailMapper;

  beforeEach(() => {
    mapper = new MatchDetailMapper();
  });

  it('should handle null values for mapFrom', () => {
    expect(mapper.mapFrom(null)).toBe(null);
  });

  it('should map from json to domain model with nullable lineup and events', () => {
    const actual: MatchDetailJson = {
      matchId: '1234',
      date: '1566738000000',
      location: 'Dahenfeld',
      fixture: '1. Spieltag',
      home_id: '1',
      home_team_id: '11',
      home_name: 'SGM Typescript',
      home_logo: 'home-logo.png',
      home_result: '5',
      away_id: '2',
      away_team_id: '22',
      away_name: 'SGM Javascript',
      away_logo: 'away-logo.png',
      away_result: '1',
      lineup: [null],
      events: [null],
    };

    const expected: MatchDetail = new MatchDetail();
    expected.matchId = 1234;
    expected.date = DateUtils.ofUnixTimestampString('1566738000000');
    expected.location = 'Dahenfeld';
    expected.fixture = '1. Spieltag';
    expected.homeId = 1;
    expected.homeTeamId = 11;
    expected.homeName = 'SGM Typescript';
    expected.homeImage = 'home-logo.png';
    expected.homeResult = 5;
    expected.awayId = 2;
    expected.awayTeamId = 22;
    expected.awayName = 'SGM Javascript';
    expected.awayImage = 'away-logo.png';
    expected.awayResult = 1;
    expected.lineup = [];
    expected.events = [];

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });

  it('should map from json to core model', () => {
    const actual: MatchDetailJson = {
      matchId: '1234',
      date: '1566738000000',
      location: 'Dahenfeld',
      fixture: '1. Spieltag',
      home_id: '1',
      home_team_id: '11',
      home_name: 'SGM Typescript',
      home_logo: 'home-logo.png',
      home_result: '5',
      away_id: '2',
      away_team_id: '22',
      away_name: 'SGM Javascript',
      away_logo: 'away-logo.png',
      away_result: '1',
      lineup: [
        {
          firstname: 'Type',
          lastname: 'Script',
          captain: true,
          jerseynumber: '20',
          personId: '1',
          picture: 'type-script.jpeg',
          position: 'Keeper',
        },
      ],
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
        },
      ],
    };

    const expectedPlayer: MatchPlayer = new MatchPlayer();
    expectedPlayer.firstname = 'Type';
    expectedPlayer.lastname = 'Script';
    expectedPlayer.captain = true;
    expectedPlayer.jerseynumber = 20;
    expectedPlayer.id = 1;
    expectedPlayer.image = 'type-script.jpeg';
    expectedPlayer.position = 'Keeper';

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
    expected.homeTeamId = 11;
    expected.homeName = 'SGM Typescript';
    expected.homeImage = 'home-logo.png';
    expected.homeResult = 5;
    expected.awayId = 2;
    expected.awayTeamId = 22;
    expected.awayName = 'SGM Javascript';
    expected.awayImage = 'away-logo.png';
    expected.awayResult = 1;
    expected.lineup = [expectedPlayer];
    expected.events = [expectedEvent];

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });
});
