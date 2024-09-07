import { HistoricRankingMapper } from './historicRankingMapper';
import { HistoricRankingJson } from './historicRankingJson.model';
import { RankingTeam } from '../../../core/domain/rankingTeam.model';

describe('Mapper', () => {
  let mapper: HistoricRankingMapper;

  beforeEach(() => {
    mapper = new HistoricRankingMapper();
  });

  it('should handle null values for mapFrom', () => {
    expect(mapper.mapFrom(null)).toBe(null);
  });

  it('should map from json to core model', () => {
    const actual: HistoricRankingJson = {
      id: '1',
      name: 'SC Dahenfeld',
      logo: '/images/scd.png',
      matches: '30',
      won: '29',
      draw: '1',
      lost: '0',
      goalsFor: '100',
      goalsAgainst: '12',
      points: '90',
    };

    const expected: RankingTeam = new RankingTeam();
    expected.id = 1;
    expected.name = 'SC Dahenfeld';
    expected.image = '/images/scd.png';
    expected.matches = 30;
    expected.wins = 29;
    expected.draws = 1;
    expected.losses = 0;
    expected.goalsFor = 100;
    expected.goalsAgainst = 12;
    expected.points = 90;

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });
});
