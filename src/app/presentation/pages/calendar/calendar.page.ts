import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {CalendarEntry} from '../../../core/domain/calendarEntry.model';
import {Moment} from 'moment';
import {ModalController} from '@ionic/angular';
import {MatchDetailPage} from '../match-detail/match-detail.page';
import {EventDetailPage} from '../event-detail/event-detail.page';

@Component({
    templateUrl: 'calendar.page.html',
    styleUrls: ['calendar.page.scss']
})
export class CalendarPage implements OnInit {

    calendarEntries: CalendarEntry[] = [];
    lastDay = null;

    isLoading = true;
    isError = false;

    constructor(private calendarService: CalendarService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {
        this.calendarService.loadCalendarEntries().subscribe(
            events => {
                this.calendarEntries = events;

                this.isLoading = false;
            },
            error => {
                this.isError = false;
                console.error(error);
            }
        );
    }

    public isDifferentDay(date: Moment): boolean {
        const isSame = date.isSame(this.lastDay, 'day');
        this.lastDay = date;
        return !isSame;
    }

    public openMatchDetail(entry) {
        this.modalController.create({
            component: MatchDetailPage,
            componentProps: {
                'matchId': entry.id
            }
        }).then(modal => modal.present());
    }

    public openEventDetail(entry) {
        this.modalController.create({
            component: EventDetailPage,
            componentProps: {
                'event': entry
            }
        }).then(modal => modal.present());
    }

}
