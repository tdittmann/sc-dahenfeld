import {RankingTeamJson} from './rankingTeamJson.model';
import {RankingTeam} from '../../../core/domain/rankingTeam.model';

// TODO tdit0703: Tests
export class RankingTeamMapper {

    mapFrom(param: RankingTeamJson): RankingTeam {
        const rankingTeam = new RankingTeam();
        rankingTeam.id = param.teamId;
        rankingTeam.name = param.teamName;
        rankingTeam.image = param.teamLogo;
        rankingTeam.matches = param.matches;
        rankingTeam.wins = param.wins;
        rankingTeam.draws = param.draws;
        rankingTeam.losses = param.losses;
        rankingTeam.goalsFor = param.goalsFor;
        rankingTeam.goalsAgainst = param.goalsAgainst;
        rankingTeam.goalsDiff = param.goalsDiff;
        rankingTeam.points = param.points;
        return rankingTeam;
    }

}
