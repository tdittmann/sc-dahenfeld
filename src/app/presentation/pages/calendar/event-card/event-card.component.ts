import {CalendarEvent} from '../../../../core/domain/calendarEvent.model';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'event-card',
    templateUrl: 'event-card.component.html',
    styleUrls: ['event-card.component.scss']
})
export class EventCardComponent {

    @Input() event: CalendarEvent;

    constructor() {

    }

}
