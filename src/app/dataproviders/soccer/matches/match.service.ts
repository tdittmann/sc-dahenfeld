import {Observable} from 'rxjs';
import {Match} from '../../../core/domain/match.model';
import {MatchJson} from './matchJson.model';
import {environment} from '../../../../environments/environment';
import {MatchMapper} from './matchMapper';
import {map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpService} from '../../http.service';

@Injectable()
export class MatchService {

    private matchMapper = new MatchMapper();

    constructor(private httpService: HttpService) {

    }

    loadAllMatchesByTeamId(teamId: number): Observable<Match[]> {
        return this.loadMatches(teamId, false);
    }

    loadOnlyTeamMatchesByTeamId(teamId: number): Observable<Match[]> {
        return this.loadMatches(teamId, true);
    }

    private loadMatches(teamId: number, teamOnly: boolean): Observable<Match[]> {
        return this.httpService
            .get<MatchJson[]>(environment.backendUrl + 'matches?teamId=' + teamId + '&teamOnly=' + teamOnly)
            .pipe(map(pMatch => pMatch.map(this.matchMapper.mapFrom)))
            .pipe(tap(pMatch => pMatch.sort(((a, b) => a.compareTo(b)))));
    }

}
