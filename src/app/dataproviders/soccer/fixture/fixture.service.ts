import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FixtureMatch} from '../../../core/domain/fixtureMatch.model';
import {FixtureMatchJson} from './fixtureMatchJson.model';
import {environment} from '../../../../environments/environment';
import {FixtureMatchMapper} from './fixtureMatch.mapper';
import {map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class FixtureService {

    private fixtureMatchMapper = new FixtureMatchMapper();

    constructor(private httpClient: HttpClient) {

    }

    loadFixture(teamId: number): Observable<FixtureMatch[]> {
        return this.httpClient
            .get<FixtureMatchJson[]>(environment.backendUrl + 'matches?teamId=' + teamId)
            .pipe(map(pFixtureMatch => pFixtureMatch.map(this.fixtureMatchMapper.mapFrom)))
            .pipe(tap(pFixtureMatch => pFixtureMatch.sort(((a, b) => a.compareTo(b)))));
    }

}
