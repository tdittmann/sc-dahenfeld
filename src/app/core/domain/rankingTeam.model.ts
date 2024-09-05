export class RankingTeam {
  id: number;
  place: number;
  name: string;
  image: string;
  matches = 0;
  wins = 0;
  draws = 0;
  losses = 0;
  goalsFor = 0;
  goalsAgainst = 0;
  points = 0;

  public isFavoriteTeam(): boolean {
    return this.name.includes('Dahenfeld') || this.name.includes('Kochertal');
  }

  public getGoalsDiff(): number {
    return this.goalsFor - this.goalsAgainst;
  }

  public compareTo(rankingTeam: RankingTeam): number {
    // Sort by points
    if (this.points < rankingTeam.points) {
      return 1;
    }
    if (this.points > rankingTeam.points) {
      return -1;
    }

    // Sort by goalsDiff
    if (this.getGoalsDiff() < rankingTeam.getGoalsDiff()) {
      return 1;
    }
    if (this.getGoalsDiff() > rankingTeam.getGoalsDiff()) {
      return -1;
    }

    // Sort by goalsFor
    if (this.goalsFor < rankingTeam.goalsFor) {
      return 1;
    }
    if (this.goalsFor > rankingTeam.goalsFor) {
      return -1;
    }

    return 0;
  }
}
