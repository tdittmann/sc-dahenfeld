import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {RankingTeamJson} from './rankingTeamJson.model';
import {RankingTeam} from '../../../core/domain/rankingTeam.model';
import {map, tap} from 'rxjs/operators';
import {RankingTeamMapper} from './rankingTeam.mapper';

@Injectable()
export class RankingService {

    rankingTeamMapper = new RankingTeamMapper();

    constructor(private httpClient: HttpClient) {

    }

    loadRanking(teamId: number): Observable<RankingTeam[]> {
        return this.httpClient
            .get<RankingTeamJson[]>(environment.backendUrl + 'ranking?teamId=' + teamId)
            .pipe(map(pRankingTeam => pRankingTeam.map(this.rankingTeamMapper.mapFrom)))
            .pipe(tap(pRankingTeam => pRankingTeam.sort(((a, b) => a.compareTo(b)))));
    }

}
