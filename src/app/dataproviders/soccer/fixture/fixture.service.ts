import {Observable} from 'rxjs';
import {FixtureMatch} from '../../../core/domain/fixtureMatch.model';
import {FixtureMatchJson} from './fixtureMatchJson.model';
import {environment} from '../../../../environments/environment';
import {FixtureMatchMapper} from './fixtureMatch.mapper';
import {map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpService} from '../../http.service';

@Injectable()
export class FixtureService {

    private fixtureMatchMapper = new FixtureMatchMapper();

    constructor(private httpService: HttpService) {

    }

    loadFixture(teamId: number): Observable<FixtureMatch[]> {
        return this.httpService
            .get<FixtureMatchJson[]>(environment.backendUrl + 'matches?teamId=' + teamId)
            .pipe(map(pFixtureMatch => pFixtureMatch.map(this.fixtureMatchMapper.mapFrom)))
            .pipe(tap(pFixtureMatch => pFixtureMatch.sort(((a, b) => a.compareTo(b)))));
    }

}
