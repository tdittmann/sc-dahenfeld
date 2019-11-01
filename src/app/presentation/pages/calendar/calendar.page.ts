import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {CalendarEntry} from '../../../core/domain/calendarEntry.model';
import {Moment} from 'moment';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'calendar.page.html',
    styleUrls: ['calendar.page.scss']
})
export class CalendarPage implements OnInit {

    calendarEntries: CalendarEntry[] = [];
    lastDay = null;

    constructor(private calendarService: CalendarService,
                private router: Router,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        this.calendarService.loadCalendarEntries().subscribe(
            events => {
                this.calendarEntries = events;

                this.loadingService.hideLoading();
            },
            error => this.errorService.showError(error)
        );
    }

    public isDifferentDay(date: Moment): boolean {
        const isSame = date.isSame(this.lastDay, 'day');
        this.lastDay = date;
        return !isSame;
    }

    public openEventDetail(entry) {
        this.router.navigateByUrl('/event-detail', {
            state: {
                data: JSON.stringify(entry)
            }
        });
    }

}
