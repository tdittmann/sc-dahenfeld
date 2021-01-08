import {Injectable} from '@angular/core';
import {TimelineTitle} from '../../core/domain/timelineTitle.model';
import {environment} from '../../../environments/environment';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpService} from '../http.service';

@Injectable()
export class TimelineService {

    constructor(private httpService: HttpService) {

    }

    public loadTitles(): Observable<TimelineTitle> {
        return this.httpService
            .get<string[]>(environment.backendUrl + 'timelineTitle')
            .pipe(filter(value => Array.isArray(value)))
            .pipe(map(value => value[0]))
            .pipe(map(value => {
                return {
                    title: value['title'],
                    subTitle: value['subtitle']
                };
            }));
    }

}
