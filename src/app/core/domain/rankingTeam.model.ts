export class RankingTeam {

    id: number;
    place: number;
    name: string;
    image: string;
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsDiff: number;
    points: number;

    public isFavoriteTeam(): boolean {
        return this.name.includes('Dahenfeld');
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
        if (this.goalsDiff < rankingTeam.goalsDiff) {
            return 1;
        }
        if (this.goalsDiff > rankingTeam.goalsDiff) {
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
