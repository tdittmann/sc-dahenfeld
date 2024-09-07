import { HistoricRankingJson } from './historicRankingJson.model';
import { RankingTeam } from '../../../core/domain/rankingTeam.model';

export class HistoricRankingMapper {
  mapFrom(param: HistoricRankingJson): RankingTeam {
    if (!param) {
      return null;
    }

    const rankingTeam = new RankingTeam();
    rankingTeam.id = parseInt(param.id, 10);
    rankingTeam.name = param.name;
    rankingTeam.image = param.logo;
    rankingTeam.matches = parseInt(param.matches, 10);
    rankingTeam.wins = parseInt(param.won, 10);
    rankingTeam.draws = parseInt(param.draw, 10);
    rankingTeam.losses = parseInt(param.lost, 10);
    rankingTeam.goalsFor = parseInt(param.goalsFor, 10);
    rankingTeam.goalsAgainst = parseInt(param.goalsAgainst, 10);
    rankingTeam.points = parseInt(param.points, 10);
    return rankingTeam;
  }
}
