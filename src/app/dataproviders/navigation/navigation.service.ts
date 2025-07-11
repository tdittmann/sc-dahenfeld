import { HttpService } from '../http.service';
import { Injectable, inject } from '@angular/core';
import { RootNavigation } from '../../core/domain/root-navigation.model';
import { environment } from '../../../environments/environment';
import { NavigationMapper } from './navigation.mapper';
import { RootNavigationJson } from './navigationJson.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NavigationService {
  private readonly httpService = inject(HttpService);

  private readonly mapper: NavigationMapper = new NavigationMapper();

  loadNavigation(): Observable<RootNavigation[]> {
    return this.httpService
      .get<RootNavigationJson[]>(environment.backendUrl + 'navigation')
      .pipe(map((navigationArray) => navigationArray.map((navigation) => this.mapper.mapFrom(navigation))));
  }
}
