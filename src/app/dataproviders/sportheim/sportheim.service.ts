import { Injectable, inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { SportheimInfoMapper } from './sportheim-info.mapper';
import { SportheimInfo } from '../../core/domain/sportheim-info.model';
import { SportheimInfoJson } from './sportheim-info-json.model';

@Injectable()
export class SportheimService {
  private readonly httpService = inject(HttpService);

  private readonly sportheimInfoMapper = new SportheimInfoMapper();

  loadSportheimInfo(): Observable<SportheimInfo> {
    return this.httpService
      .get<SportheimInfoJson>(environment.backendUrl + 'sportheim')
      .pipe(map((json) => this.sportheimInfoMapper.mapFrom(json)));
  }
}
