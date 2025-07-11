import { Injectable, inject } from '@angular/core';
import { TeamInformationMapper } from './teamInformation.mapper';
import { Observable } from 'rxjs';
import { TeamInformation } from '../../core/domain/teamInformation.model';
import { TeamInformationJson } from './teamInformationJson.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpService } from '../http.service';

@Injectable()
export class TeamInformationService {
  private readonly httpService = inject(HttpService);

  private readonly teamInformationMapper = new TeamInformationMapper();

  public loadTeamInformation(teamId: number): Observable<TeamInformation> {
    return this.httpService
      .get<TeamInformationJson>(environment.backendUrl + 'teamInformation?id=' + teamId)
      .pipe(map((teamInformation) => this.teamInformationMapper.mapFrom(teamInformation)));
  }
}
