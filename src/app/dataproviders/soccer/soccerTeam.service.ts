import {Injectable} from '@angular/core';
import {TeamInformationMapper} from './teamInformation.mapper';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeamInformation} from '../../core/domain/teamInformation.model';
import {TeamInformationJson} from './teamInformationJson.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class SoccerTeamService {

    private teamInformationMapper = new TeamInformationMapper();

    constructor(private httpClient: HttpClient) {

    }

    public loadTeamInformation(teamId: number): Observable<TeamInformation> {
        return this.httpClient.get<TeamInformationJson>(environment.backendUrl + 'teamInformation?id=' + teamId)
            .pipe(map(this.teamInformationMapper.mapFrom));
    }
}
