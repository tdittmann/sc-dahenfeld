import { Moment } from 'moment';
import { environment } from '../../../environments/environment';
import { MatchPlayer } from './matchPlayer.model';
import { MatchEvent } from './matchEvent.model';
import { Referee } from "./referee.model";

export class MatchDetail {
  matchId: number;
  date: Moment;
  location: string;
  fixture: string;

  homeId: number;
  homeTeamId: number;
  homeName: string;
  homeImage: string;
  homeResult: number;

  awayId: number;
  awayTeamId: number;
  awayName: string;
  awayImage: string;
  awayResult: number;

  referee: Referee | undefined;
  lineup: MatchPlayer[] = [];
  events: MatchEvent[] = [];

  getHomeResult(): string {
    if (isNaN(this.homeResult)) {
      return '-';
    }

    return String(this.homeResult);
  }

  getAwayResult(): string {
    if (isNaN(this.awayResult)) {
      return '-';
    }

    return String(this.awayResult);
  }

  getDate(): string {
    if (this.date) {
      return this.date.format(environment.longDateFormat);
    }

    return '';
  }

  getKickOffDate(): string {
    if (this.date) {
      const date = this.date.format(environment.longDateFormat);
      const time = this.date.format(environment.timeFormat);
      return `${date} um ${time} Uhr`;
    }

    return '';
  }

  getSubstitutions(): MatchEvent[] {
    return this.events.filter((value) => value.cameInForFirstname !== undefined);
  }
}
