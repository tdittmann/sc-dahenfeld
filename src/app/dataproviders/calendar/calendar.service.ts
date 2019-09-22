import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {map, tap} from 'rxjs/operators';
import {CalendarMapper} from './calendarMapper';
import {CalendarJson} from './calendarEventJson.model';
import {CalendarEntry} from '../../core/domain/calendarEntry.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CalendarService {

    private eventMapper: CalendarMapper = new CalendarMapper();

    constructor(private httpClient: HttpClient) {

    }

    public loadCalendarEntries(): Observable<CalendarEntry[]> {
        return this.httpClient
            .get<CalendarJson[]>(environment.backendUrl + 'calendar')
            .pipe(map(value => value.map(this.eventMapper.mapFrom)))
            .pipe(tap(values => values.sort(((a, b) => a.compareTo(b)))));
    }

}
