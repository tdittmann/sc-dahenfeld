import { RankingTeam } from '../core/domain/rankingTeam.model';
import { Match } from '../core/domain/match.model';

export class RankingUtil {
  public static calculateRanking(matches: Match[], rankingType: string): RankingTeam[] {
    const ranking: RankingTeam[] = [];
    const matchesPerHalfSeason = Math.max(...matches.map((value) => value.getFixtureNumber())) / 2;

    for (let match of matches) {
      const fixtureNumber = match.getFixtureNumber();

      if (
        (rankingType === 'firstHalf' && fixtureNumber > matchesPerHalfSeason) ||
        (rankingType === 'secondHalf' && fixtureNumber <= matchesPerHalfSeason)
      ) {
        continue;
      }

      if (rankingType !== 'away') {
        this.handleMatch(ranking, match.homeId, match.homeName, match.homeImage, match.homeResult, match.awayResult);
      }

      if (rankingType !== 'home') {
        this.handleMatch(ranking, match.awayId, match.awayName, match.awayImage, match.awayResult, match.homeResult);
      }
    }

    ranking.sort((a, b) => a.compareTo(b));
    ranking.forEach((value, index) => (value.place = index + 1));

    return ranking;
  }

  static calculateHistoricRanking(ranking: RankingTeam[]) {
    const finalRanking = [...ranking];
    finalRanking.sort((a, b) => a.compareTo(b));
    finalRanking.forEach((value, index) => (value.place = index + 1));
    return finalRanking;
  }

  private static handleMatch(
    ranking: RankingTeam[],
    teamId: number,
    teamName: string,
    teamImage: string,
    goalsFor: number,
    goalsAgainst: number,
  ) {
    let team: RankingTeam = ranking.find((value) => value.id === teamId);

    // Check if team already is in ranking
    if (!team) {
      team = this.createRankingTeam(teamId, teamName, teamImage);
      ranking.push(team);
    }

    if (Number.isInteger(goalsFor) && Number.isInteger(goalsAgainst)) {
      let points: number;
      let win: number;
      let draw: number;
      let loss: number;
      if (goalsFor > goalsAgainst) {
        // Win
        points = 3;
        win = 1;
        draw = 0;
        loss = 0;
      } else if (goalsFor === goalsAgainst) {
        // Draw
        points = 1;
        win = 0;
        draw = 1;
        loss = 0;
      } else {
        // Lose
        points = 0;
        win = 0;
        draw = 0;
        loss = 1;
      }

      // Add calculated things to team
      team.matches++;
      team.points += points;
      team.wins += win;
      team.draws += draw;
      team.losses += loss;
      team.goalsFor += goalsFor;
      team.goalsAgainst += goalsAgainst;
    }
  }

  private static createRankingTeam(teamId: number, teamName: string, teamImage: string): RankingTeam {
    const rankingTeam: RankingTeam = new RankingTeam();
    rankingTeam.id = teamId;
    rankingTeam.name = teamName;
    rankingTeam.image = teamImage;
    return rankingTeam;
  }
}
