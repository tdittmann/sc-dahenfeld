import {HttpService} from '../../http.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {MatchDetail} from '../../../core/domain/matchDetail.model';
import {MatchDetailJson} from './matchDetailJson';
import {MatchDetailMapper} from './matchDetail.mapper';

@Injectable()
export class MatchDetailService {

    private matchDetailMapper: MatchDetailMapper = new MatchDetailMapper();

    constructor(private httpService: HttpService) {

    }

    loadMatchDetails(matchId: number): Observable<MatchDetail> {
        return this.httpService.get<MatchDetailJson>(environment.backendUrl + 'match?id=' + matchId)
            .pipe(map(match => {
                const mappedMatch = this.matchDetailMapper.mapFrom(match);
                mappedMatch.events.sort((a, b) => a.time - b.time);
                return mappedMatch;
            }));
    }

}
