import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {VersionInfoJson} from './versionInfoJson.model';
import {VersionInfo} from '../../core/domain/versionInfo.model';
import {VersionMapper} from './version.mapper';

@Injectable()
export class VersionService {

    private versionMapper: VersionMapper = new VersionMapper();

    constructor(private httpService: HttpService) {

    }

    loadVersionInfo(): Observable<VersionInfo> {
        return this.httpService
            .get<VersionInfoJson>(environment.backendUrl + 'version')
            .pipe(map(pVersionInfo => this.versionMapper.mapFrom(pVersionInfo)));
    }

}
