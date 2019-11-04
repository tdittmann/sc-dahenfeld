import {HttpService} from '../http.service';
import {Injectable} from '@angular/core';
import {RootNavigation} from '../../core/domain/root-navigation.model';
import {environment} from '../../../environments/environment';
import {NavigationMapper} from './navigation.mapper';
import {RootNavigationJson} from './navigationJson.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class NavigationService {

    private mapper: NavigationMapper = new NavigationMapper();

    constructor(private httpService: HttpService) {

    }

    loadNavigation(): Observable<RootNavigation[]> {
        return this.httpService.get<RootNavigationJson[]>(environment.backendUrl + 'navigation')
            .pipe(map(navigationArray => navigationArray.map(navigation => this.mapper.mapFrom(navigation))));
    }

}
