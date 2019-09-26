import {RankingTeamJson} from './rankingTeamJson.model';
import {RankingTeam} from '../../../core/domain/rankingTeam.model';
import {Mapper} from '../../../core/base/mapper';

export class RankingTeamMapper implements Mapper<RankingTeamJson, RankingTeam> {

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

    mapTo(param: RankingTeam): RankingTeamJson {
        return {
            teamId: param.id,
            teamName: param.name,
            teamLogo: param.image,
            matches: param.matches,
            wins: param.wins,
            draws: param.draws,
            losses: param.losses,
            goalsFor: param.goalsFor,
            goalsAgainst: param.goalsAgainst,
            goalsDiff: param.goalsDiff,
            points: param.points,
        };
    }

}
