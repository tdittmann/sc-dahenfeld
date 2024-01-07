import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../../../core/domain/person.model";
import { PersonJson } from "./personJson.model";
import { environment } from "../../../../environments/environment";
import { map, tap } from "rxjs/operators";
import { HttpService } from "../../http.service";
import { PersonMapper } from "./person.mapper";

@Injectable()
export class PersonService {
  private playerMapper = new PersonMapper();

  constructor(private httpService: HttpService) {
  }

  loadPersons(): Observable<Person[]> {
    return this.httpService
      .get<PersonJson[]>(environment.backendUrl + "persons")
      .pipe(map((players) => players.map((value) => this.playerMapper.mapFrom(value))))
      .pipe(tap((players) => players.sort((a, b) => a.compareTo(b))));
  }

  loadPersonsByProjectId(projectId: number): Observable<Person[]> {
    return this.httpService
      .get<PersonJson[]>(environment.backendUrl + "persons?teamId=" + projectId)
      .pipe(map((players) => players.map((value) => this.playerMapper.mapFrom(value))))
      .pipe(tap((players) => players.sort((a, b) => a.compareTo(b))));
  }

  loadPerson(personId: number, projectId: number): Observable<Person> {
    return this.httpService
      .get<PersonJson>(environment.backendUrl + "person?personId=" + personId + "&projectId=" + projectId)
      .pipe(map((pPerson) => this.playerMapper.mapFrom(pPerson)));
  }
}
