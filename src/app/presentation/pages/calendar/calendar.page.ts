import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {CalendarEntry} from '../../../core/domain/calendarEntry.model';
import {Moment} from 'moment';

@Component({
    templateUrl: 'calendar.page.html',
    styleUrls: ['calendar.page.scss']
})
export class CalendarPage implements OnInit {

    calendarEntries: CalendarEntry[] = [];

    lastDay = null;

    constructor(private calendarService: CalendarService) {

    }

    ngOnInit(): void {
        this.calendarService.loadCalendarEntries()
            .subscribe(
                events => {
                    this.calendarEntries = events;
                },
                error => {
                    // TODO tdit0703: error handling
                    console.error(error);
                }
            );
    }

    public isDifferentDay(date: Moment): boolean {
        const isSame = date.isSame(this.lastDay, 'day');
        this.lastDay = date;
        return !isSame;
    }

}
