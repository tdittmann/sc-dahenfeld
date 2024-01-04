import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { VersionInfoJson } from './versionInfoJson.model';
import { VersionInfo } from '../../core/domain/versionInfo.model';
import { VersionMapper } from './version.mapper';

@Injectable()
export class VersionService {
  private versionMapper: VersionMapper = new VersionMapper();

  constructor(private httpService: HttpService) {}

  loadVersionInfo(): Observable<VersionInfo[]> {
    return this.httpService.get<VersionInfoJson[]>(environment.backendUrl + 'version').pipe(
      map((versionInfos) => {
        // Can be replaces with normal .map when all apps are higher than 5.0.1
        const mappedInfos = [];
        for (let i = 0; i < 3; i++) {
          if (versionInfos[i]) {
            mappedInfos.push(this.versionMapper.mapFrom(versionInfos[i]));
          }
        }
        return mappedInfos;
      }),
    );
  }
}
