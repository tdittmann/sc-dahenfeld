import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';
import {VscMapper} from './vsc.mapper';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {VscAthleteJson} from './vscRankingJson.model';
import {VscAthlete} from '../../core/domain/vscAthlete.model';

@Injectable()
export class VscService {

    private vscMapper: VscMapper = new VscMapper();

    constructor(private httpService: HttpService) {

    }

    public loadRanking(year: number, month: number): Observable<VscAthlete[]> {
        const monthParam = (month > 0)
            ? `month=${month}`
            : '';

        return this.httpService
            .get<VscAthleteJson[]>(`${environment.backendUrl}vsc?year=${year}&${monthParam}`)
            .pipe(map(vscAthletes => vscAthletes.map(vscAthlete => this.vscMapper.mapFrom(vscAthlete))));
    }

}
