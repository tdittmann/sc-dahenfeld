import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {map, tap} from 'rxjs/operators';
import {CalendarMapper} from './calendarMapper';
import {CalendarJson} from './calendarEventJson.model';
import {CalendarEntry} from '../../core/domain/calendarEntry.model';
import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';

@Injectable()
export class CalendarService {

    private eventMapper: CalendarMapper = new CalendarMapper();

    constructor(private httpService: HttpService) {

    }

    public loadCalendarEntries(): Observable<CalendarEntry[]> {
        return this.httpService
            .get<CalendarJson[]>(environment.backendUrl + 'calendar')
            .pipe(map(value => value.map(this.eventMapper.mapFrom)))
            .pipe(tap(values => values.sort(((a, b) => a.compareTo(b)))));
    }

}
