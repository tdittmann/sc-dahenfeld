import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../../../core/domain/person.model';
import {PersonJson} from './personJson.model';
import {environment} from '../../../../environments/environment';
import {PersonMapper} from './personMapper';
import {map, tap} from 'rxjs/operators';
import {HttpService} from '../../http.service';

@Injectable()
export class PersonService {

    private playerMapper = new PersonMapper();

    constructor(private httpService: HttpService) {

    }

    loadPlayers(teamId: number): Observable<Person[]> {
        return this.httpService
            .get<PersonJson[]>(environment.backendUrl + 'players?teamId=' + teamId)
            .pipe(map(pPlayer => pPlayer.map(value => this.playerMapper.mapFrom(value))))
            .pipe(tap(pPlayer => pPlayer.sort(((a, b) => a.compareTo(b)))));
    }

    loadPerson(personId: number): Observable<Person> {
        return this.httpService
            .get<PersonJson>(environment.backendUrl + 'person?personId=' + personId)
            .pipe(map(pPerson => this.playerMapper.mapFrom(pPerson)));
    }

}
