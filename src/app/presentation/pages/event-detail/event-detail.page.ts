import {Component, Input} from '@angular/core';
import {CalendarEvent} from '../../../core/domain/calendarEvent.model';

@Component({
    templateUrl: 'event-detail.page.html',
    styleUrls: ['event-detail.page.scss']
})
export class EventDetailPage {

    @Input() event: CalendarEvent;

    constructor() {

    }

}
