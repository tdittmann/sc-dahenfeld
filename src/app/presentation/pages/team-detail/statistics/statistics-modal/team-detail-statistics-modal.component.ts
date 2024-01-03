import {Component, Input} from '@angular/core';
import {Person} from '../../../../../core/domain/person.model';

@Component({
    selector: 'app-team-detail-statistics-modal',
    templateUrl: 'team-detail-statistics-modal.component.html',
    styleUrls: ['team-detail-statistics-modal.component.scss']
})
export class TeamDetailStatisticsModalComponent {

    @Input() searchFilter: string;
    @Input() heading: string;
    @Input() persons: Person[] = [];
    @Input() filter: string;

}
