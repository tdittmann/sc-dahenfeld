import { Moment } from "moment/moment";
import { FavoriteTeamUtil } from "../../util/FavoriteTeamUtil";

export class PersonMatch {
  seasonName: string;
  leagueName: string;
  matchId: number;
  matchDate: Moment;
  homeTeamName: string;
  homeImage: string;
  homeGoals: number;
  awayTeamName: string;
  awayImage: string;
  awayGoals: number;

  getMatchDate(): string {
    return this.matchDate.format("DD.MM.");
  }

  getOpponentName(): string {
    return FavoriteTeamUtil.isFavoriteTeam(this.homeTeamName) ? this.awayTeamName : this.homeTeamName;
  }

  getOpponentImage(): string {
    return FavoriteTeamUtil.isFavoriteTeam(this.homeTeamName) ? this.awayImage : this.homeImage;
  }

  getResult(): string {
    return `${this.homeGoals}:${this.awayGoals}`;
  }

  getBorderColor(): string {
    // Is it a win?
    if ((this.homeGoals > this.awayGoals && FavoriteTeamUtil.isFavoriteTeam(this.homeTeamName))
      || (this.awayGoals > this.homeGoals && FavoriteTeamUtil.isFavoriteTeam(this.awayTeamName))) {
      return "border-color-win";
    }

    // Is it a draw?
    if (this.homeGoals === this.awayGoals) {
      return "border-color-draw";
    }

    // It has to be a lose
    return "border-color-lose";
  }
}
