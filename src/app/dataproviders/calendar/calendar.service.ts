import { combineLatest, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { CalendarMapper } from './calendarMapper';
import { CalendarJson } from './calendarEventJson.model';
import { CalendarEntry } from '../../core/domain/calendarEntry.model';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { CalendarEvent } from '../../core/domain/calendarEvent.model';
import { CalendarMatch } from '../../core/domain/calendarMatch.model';

@Injectable()
export class CalendarService {
  private eventMapper: CalendarMapper = new CalendarMapper();

  constructor(private httpService: HttpService) {}

  loadCalendarEvents(): Observable<CalendarEntry[]> {
    return this.httpService
      .get<CalendarJson[]>(environment.backendUrl + 'calendarEvents')
      .pipe(map((value) => value.map(this.eventMapper.mapFrom)))
      .pipe(map((values) => values.map((value) => value as CalendarEvent)))
      .pipe(tap((values) => values.sort((a, b) => a.compareTo(b))));
  }

  loadCalendarMatches(): Observable<CalendarEntry[]> {
    return this.httpService
      .get<CalendarJson[]>(environment.backendUrl + 'calendarMatches')
      .pipe(map((value) => value.map(this.eventMapper.mapFrom)))
      .pipe(map((values) => values.map((value) => value as CalendarMatch)))
      .pipe(tap((values) => values.sort((a, b) => a.compareTo(b))));
  }

  public loadCalendarEntries(): Observable<CalendarEntry[]> {
    return combineLatest([this.loadCalendarEvents(), this.loadCalendarMatches()])
      .pipe(map((result) => result[0].concat(result[1])))
      .pipe(tap((values) => values.sort((a, b) => a.compareTo(b))));
  }
}
