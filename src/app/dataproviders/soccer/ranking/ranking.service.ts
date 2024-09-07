import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';
import { HistoricRankingMapper } from './historicRankingMapper';
import { RankingTeam } from '../../../core/domain/rankingTeam.model';
import { HistoricRankingJson } from './historicRankingJson.model';

@Injectable()
export class RankingService {
  private historicRankingMapper = new HistoricRankingMapper();

  constructor(private httpService: HttpService) {}

  public loadHistoricRanking(projectId: number): Observable<RankingTeam[]> {
    return this.httpService
      .get<HistoricRankingJson[]>(environment.backendUrl + 'historicRanking?projectId=' + projectId)
      .pipe(map((ranking) => ranking.map(this.historicRankingMapper.mapFrom)));
  }
}
