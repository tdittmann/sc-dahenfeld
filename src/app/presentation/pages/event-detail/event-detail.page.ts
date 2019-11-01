import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {CalendarEvent} from '../../../core/domain/calendarEvent.model';
import {DateUtils} from '../../../util/DateUtils';

@Component({
    templateUrl: 'event-detail.page.html',
    styleUrls: ['event-detail.page.scss']
})
export class EventDetailPage implements OnInit {

    event: CalendarEvent = new CalendarEvent();

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {

        this.activatedRoute.paramMap
            .pipe(map(() => window.history.state))
            .subscribe(value => {
                // Only for development purposes
                if (!value.data) {
                    window.history.back();
                }

                Object.assign(this.event, JSON.parse(value.data));

                // We need to set dates because after json parse it isn't a real typescript object :(
                this.event.start = DateUtils.of(this.event.start);
                if (this.event.end) {
                    this.event.end = DateUtils.of(this.event.end);
                }
            });

    }

}
