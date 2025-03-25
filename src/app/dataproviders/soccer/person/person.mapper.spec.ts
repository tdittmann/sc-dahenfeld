import { PersonMapper } from './person.mapper';
import { PersonJson } from './personJson.model';
import { Person } from '../../../core/domain/person.model';
import { DateUtils } from '../../../util/DateUtils';
import { PersonStatistic } from '../../../core/domain/personStatistic.model';
import { PersonFact } from '../../../core/domain/personFact.model';
import { PersonMatch } from '../../../core/domain/personMatch.model';

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
      show_on_frontend: '1',
      facts: [{ label: 'Lieblingsverein', value: 'SC Dahenfeld' }],
      seasonStats: {
        yellowCards: 4,
        yellowRedCards: 0,
        redCards: 0,
        goals: 4,
        matches: 27,
        matchesAsKeeper: 26,
        starting: 26,
        cameIn: 1,
        cameOut: 7,
        playingMinutes: 2302,
        statistic_hint: 'Season 12/13',
        goalsAgainst: 8,
        goalsAgainstAsKeeper: 7,
        matchesWithoutGoalsAgainst: 9,
        matchesWithoutGoalsAgainstAsKeeper: 10,
      },
      careerStats: {
        yellowCards: 24,
        yellowRedCards: 0,
        redCards: 0,
        goals: 64,
        matches: 160,
        matchesAsKeeper: 159,
        starting: 159,
        cameIn: 1,
        cameOut: 14,
        playingMinutes: 14133,
        statistic_hint: 'Since 11/12',
        goalsAgainst: 8,
        goalsAgainstAsKeeper: 7,
        matchesWithoutGoalsAgainst: 9,
        matchesWithoutGoalsAgainstAsKeeper: 10,
      },
      careerMatches: [
        {
          seasonName: '2023/2024',
          leagueName: 'Kreisliga A',
          matchId: '9950',
          matchDate: '1737327600',
          homeTeamName: 'VfL Was auch Immer',
          homeImage: 'https://sc-dahenfeld.de/images/com_sportsmanagement/database/clubs/large/19.png',
          homeGoals: '2',
          awayTeamName: 'SC Dahenfeld',
          awayImage: 'https://sc-dahenfeld.de/images/com_sportsmanagement/database/clubs/large/4.png',
          awayGoals: '1',
        },
      ],
    };

    const expectedFact = new PersonFact('Lieblingsverein', 'SC Dahenfeld');

    const expectedSeasonStats = new PersonStatistic();
    expectedSeasonStats.yellowCards = 4;
    expectedSeasonStats.yellowRedCards = 0;
    expectedSeasonStats.redCards = 0;
    expectedSeasonStats.goals = 4;
    expectedSeasonStats.matches = 27;
    expectedSeasonStats.matchesAsKeeper = 26;
    expectedSeasonStats.starting = 26;
    expectedSeasonStats.cameIn = 1;
    expectedSeasonStats.cameOut = 7;
    expectedSeasonStats.playingMinutes = 2302;
    expectedSeasonStats.statisticHint = 'Season 12/13';
    expectedSeasonStats.goalsAgainst = 8;
    expectedSeasonStats.goalsAgainstAsKeeper = 7;
    expectedSeasonStats.matchesWithoutGoalsAgainst = 9;
    expectedSeasonStats.matchesWithoutGoalsAgainstAsKeeper = 10;

    const expectedCareerStats = new PersonStatistic();
    expectedCareerStats.yellowCards = 24;
    expectedCareerStats.yellowRedCards = 0;
    expectedCareerStats.redCards = 0;
    expectedCareerStats.goals = 64;
    expectedCareerStats.matches = 160;
    expectedCareerStats.matchesAsKeeper = 159;
    expectedCareerStats.starting = 159;
    expectedCareerStats.cameIn = 1;
    expectedCareerStats.cameOut = 14;
    expectedCareerStats.playingMinutes = 14133;
    expectedCareerStats.statisticHint = 'Since 11/12';
    expectedCareerStats.goalsAgainst = 8;
    expectedCareerStats.goalsAgainstAsKeeper = 7;
    expectedCareerStats.matchesWithoutGoalsAgainst = 9;
    expectedCareerStats.matchesWithoutGoalsAgainstAsKeeper = 10;

    const expectedMatch = new PersonMatch();
    expectedMatch.seasonName = '2023/2024';
    expectedMatch.leagueName = 'Kreisliga A';
    expectedMatch.matchId = 9950;
    expectedMatch.matchDate = DateUtils.ofUnixTimestampString('1737327600');
    expectedMatch.homeTeamName = 'VfL Was auch Immer';
    expectedMatch.homeImage = 'https://sc-dahenfeld.de/images/com_sportsmanagement/database/clubs/large/19.png';
    expectedMatch.homeGoals = 2;
    expectedMatch.awayTeamName = 'SC Dahenfeld';
    expectedMatch.awayImage = 'https://sc-dahenfeld.de/images/com_sportsmanagement/database/clubs/large/4.png';
    expectedMatch.awayGoals = 1;
    const expectedMatches = [expectedMatch];

    const expected: Person = new Person();
    expected.id = 1;
    expected.firstname = 'Thorsten';
    expected.lastname = 'Krause';
    expected.image = 'img.png';
    expected.position = 'Sturm';
    expected.birthday = DateUtils.ofIsoDate('1999-01-02');
    expected.jerseynumber = 8;
    expected.showOnFrontend = true;
    expected.facts = [expectedFact];
    expected.seasonStatistic = expectedSeasonStats;
    expected.careerStatistic = expectedCareerStats;
    expected.careerMatches = expectedMatches;

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });
});
