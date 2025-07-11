import { Observable } from 'rxjs';
import { Match } from '../../../core/domain/match.model';
import { MatchJson } from './matchJson.model';
import { environment } from '../../../../environments/environment';
import { MatchMapper } from './matchMapper';
import { map } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Injectable()
export class MatchService {
  private readonly httpService = inject(HttpService);

  private readonly matchMapper = new MatchMapper();

  loadAllMatchesByTeamId(teamId: number): Observable<Match[]> {
    return this.loadMatches(teamId, false);
  }

  loadOnlyTeamMatchesByTeamId(teamId: number): Observable<Match[]> {
    return this.loadMatches(teamId, true);
  }

  private loadMatches(teamId: number, teamOnly: boolean): Observable<Match[]> {
    return this.httpService
      .get<MatchJson[]>(environment.backendUrl + 'matches?teamId=' + teamId + '&teamOnly=' + teamOnly)
      .pipe(map((pMatch) => pMatch.map(this.matchMapper.mapFrom)))
      .pipe(map((pMatch) => [...pMatch].sort((a, b) => a.compareTo(b))));
  }
}
