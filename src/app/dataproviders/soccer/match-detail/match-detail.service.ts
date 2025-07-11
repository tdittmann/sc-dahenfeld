import { HttpService } from '../../http.service';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { MatchDetail } from '../../../core/domain/matchDetail.model';
import { MatchDetailJson } from './matchDetailJson';
import { MatchDetailMapper } from './matchDetail.mapper';

@Injectable()
export class MatchDetailService {
  private readonly httpService = inject(HttpService);

  private readonly matchDetailMapper: MatchDetailMapper = new MatchDetailMapper();

  loadMatchDetails(matchId: number): Observable<MatchDetail> {
    return this.httpService.get<MatchDetailJson>(environment.backendUrl + 'match?id=' + matchId).pipe(
      map((match) => {
        const mappedMatch = this.matchDetailMapper.mapFrom(match);
        mappedMatch.lineup.sort((a, b) => a.compareTo(b));
        mappedMatch.events.sort((a, b) => a.time - b.time);
        return mappedMatch;
      }),
    );
  }

  loadPastMatches(matchId: number, teamId1: number, teamId2: number): Observable<MatchDetail[]> {
    return this.httpService
      .get<MatchDetailJson[]>(`${environment.backendUrl}matches_history?matchId=${matchId}&teamId1=${teamId1}&teamId2=${teamId2}`)
      .pipe(
        map((matches) => {
          return matches.map((match) => {
            const mappedMatch = this.matchDetailMapper.mapFrom(match);
            mappedMatch.lineup.sort((a, b) => a.compareTo(b));
            mappedMatch.events.sort((a, b) => a.time - b.time);
            return mappedMatch;
          });
        }),
      );
  }
}
