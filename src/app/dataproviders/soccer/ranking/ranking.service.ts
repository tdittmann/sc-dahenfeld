import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { HttpService } from '../../http.service';
import { HistoricRankingMapper } from './historicRankingMapper';
import { RankingTeam } from '../../../core/domain/rankingTeam.model';
import { HistoricRankingJson } from './historicRankingJson.model';

@Injectable()
export class RankingService {
  private readonly httpService = inject(HttpService);

  private readonly historicRankingMapper = new HistoricRankingMapper();

  public loadHistoricRanking(projectId: number): Observable<RankingTeam[]> {
    return this.httpService
      .get<HistoricRankingJson[]>(environment.backendUrl + 'historicRanking?projectId=' + projectId)
      .pipe(map((ranking) => ranking.map(this.historicRankingMapper.mapFrom)));
  }
}
