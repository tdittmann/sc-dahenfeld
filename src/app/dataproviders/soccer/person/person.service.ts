import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../../core/domain/person.model';
import { PersonJson } from './personJson.model';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpService } from '../../http.service';
import { PersonMapper } from './person.mapper';

@Injectable()
export class PersonService {
  private readonly httpService = inject(HttpService);

  private readonly playerMapper = new PersonMapper();

  loadPersons(): Observable<Person[]> {
    return this.httpService
      .get<PersonJson[]>(environment.backendUrl + 'persons')
      .pipe(map((players) => players.map((value) => this.playerMapper.mapFrom(value))))
      .pipe(map((players) => [...players].sort((a, b) => a.compareTo(b))));
  }

  loadPersonsByProjectId(projectId: number): Observable<Person[]> {
    return this.httpService
      .get<PersonJson[]>(environment.backendUrl + 'persons?teamId=' + projectId)
      .pipe(map((players) => players.map((value) => this.playerMapper.mapFrom(value))))
      .pipe(map((players) => [...players].sort((a, b) => a.compareTo(b))));
  }

  loadPerson(personId: number, projectId: number): Observable<Person> {
    return this.httpService
      .get<PersonJson>(environment.backendUrl + 'person?personId=' + personId + '&projectId=' + projectId)
      .pipe(map((pPerson) => this.playerMapper.mapFrom(pPerson)));
  }
}
