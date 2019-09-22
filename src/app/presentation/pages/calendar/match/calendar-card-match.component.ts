import {Component, Input} from '@angular/core';
import {CalendarEntry} from '../../../../core/domain/calendarEntry.model';

@Component({
    selector: 'calendar-card-match',
    templateUrl: 'calendar-card-match.component.html',
    styleUrls: ['calendar-card-match.component.scss']
})
export class CalendarCardMatchComponent {

    @Input() match: CalendarEntry;

    constructor() {
        
    }

}
