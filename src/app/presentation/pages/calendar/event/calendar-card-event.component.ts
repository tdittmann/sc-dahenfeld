import {CalendarEvent} from '../../../../core/domain/calendarEvent.model';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'calendar-card-event',
    templateUrl: 'calendar-card-event.component.html',
    styleUrls: ['calendar-card-event.component.scss']
})
export class CalendarCardEventComponent {

    @Input() event: CalendarEvent;

    constructor() {

    }

}
