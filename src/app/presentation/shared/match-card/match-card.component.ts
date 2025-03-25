import { Component, Input } from '@angular/core';
import { Moment } from 'moment';
import { FavoriteTeamUtil } from '../../../util/FavoriteTeamUtil';

@Component({
  selector: 'app-match-card',
  templateUrl: 'match-card.component.html',
  styleUrls: ['match-card.component.scss'],
})
export class MatchCardComponent {
  @Input() matchId: number;

  @Input() startDate: Moment;
  @Input() location: string;
  @Input() ageGroup: string;
  @Input() fixture: string;

  @Input() homeName: string;
  @Input() homeImage: string;
  @Input() homeResult: number;

  @Input() awayName: string;
  @Input() awayImage: string;
  @Input() awayResult: number;

  public isHomeWin(): boolean {
    return this.homeResult > this.awayResult;
  }

  public isAwayWin(): boolean {
    return this.awayResult > this.homeResult;
  }

  public getCardClass(): string {
    if (this.existsResult()) {
      // Is it a win?
      if (
        (this.isHomeWin() && FavoriteTeamUtil.isFavoriteTeam(this.homeName)) ||
        (this.isAwayWin() && FavoriteTeamUtil.isFavoriteTeam(this.awayName))
      ) {
        return 'border-color-win';
      }

      // Is it a draw?
      if (this.homeResult === this.awayResult) {
        return 'border-color-draw';
      }

      // It has to be a lose
      return 'border-color-lose';
    }

    return '';
  }

  public existsResult(): boolean {
    return !isNaN(this.homeResult) && !isNaN(this.awayResult);
  }

  public getFormattedStartTime(): string {
    if (!this.startDate) {
      return '';
    }

    return this.startDate.format('HH:mm');
  }
}
