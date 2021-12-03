import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {CalendarEntry} from '../../../core/domain/calendarEntry.model';
import {Moment} from 'moment';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'calendar.page.html',
    styleUrls: ['calendar.page.scss']
})
export class CalendarPage implements OnInit {

    heading: string;
    calendarEntries: CalendarEntry[] = [];
    lastDay = null;

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private calendarService: CalendarService) {

    }

    ngOnInit(): void {
        this.loadCalendarEvents(null);
    }

    loadCalendarEvents(event) {
        this.activatedRoute.queryParams.subscribe({
            next:
                (queryParams) => {

                    this.heading = queryParams['heading'];

                    // Check which type of calendarEntry we want to display
                    let calendarObservable;
                    if (queryParams['matches'] === 'true' && queryParams['events'] === 'false') {
                        // Only matches
                        calendarObservable = this.calendarService.loadCalendarMatches();
                    } else if (queryParams['matches'] === 'false' && queryParams['events'] === 'true') {
                        // Only events
                        calendarObservable = this.calendarService.loadCalendarEvents();
                    } else {
                        // Matches and events
                        calendarObservable = this.calendarService.loadCalendarEntries();
                    }

                    calendarObservable.subscribe(
                        events => {
                            this.calendarEntries = events;
                            this.isLoading = false;
                            this.completeEvent(event);
                        },
                        error => {
                            this.isError = false;
                            console.error(error);
                            this.completeEvent(event);
                        }
                    );

                },
            error: error => {
                this.isError = true;
                console.error(error);
                this.completeEvent(event);
            }

        });
    }

    completeEvent(event) {
        if (event) {
            event.target.complete();
        }
    }

    public isDifferentDay(date: Moment): boolean {
        const isSame = date.isSame(this.lastDay, 'day');
        this.lastDay = date;
        return !isSame;
    }

}
