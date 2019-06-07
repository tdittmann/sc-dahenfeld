import {Injectable} from '@angular/core';
import {TimelineTitle} from './timelineTitle.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class TimelineService {

    constructor(private http: HttpClient) {

    }

    public loadTitles(): Observable<TimelineTitle> {
        return this.http
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
