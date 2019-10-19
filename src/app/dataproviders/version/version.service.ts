import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {VersionInfoJson} from './versionInfoJson.model';
import {VersionInfo, VersionInfoLink} from '../../core/domain/versionInfo.model';

@Injectable()
export class VersionService {

    constructor(private httpService: HttpService) {

    }

    loadVersionInfo(): Observable<VersionInfo> {
        return this.httpService
            .get<VersionInfoJson>(environment.backendUrl + 'version')
            .pipe(map(pVersionInfo => this.mapFrom(pVersionInfo)));
    }

    // TODO tdit0703: Tests + in eigene klasse auslagern
    private mapFrom(param: VersionInfoJson): VersionInfo {
        const versionInfo = new VersionInfo();
        versionInfo.version = param.version;

        if (param.links) {
            for (let i = 0; i < param.links.length; i++) {
                const versionInfoLink = new VersionInfoLink();
                versionInfoLink.platform = param.links[i].platform;
                versionInfoLink.url = param.links[i].url;
                versionInfo.links.push(versionInfoLink);
            }
        }

        return versionInfo;
    }

}
