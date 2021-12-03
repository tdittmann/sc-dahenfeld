import {Component, Input} from '@angular/core';
import {Person} from '../../../../../core/domain/person.model';

@Component({
    templateUrl: 'statistics-modal.component.html',
    styleUrls: ['statistics-modal.component.scss']
})
export class StatisticsModalComponent {

    @Input() searchFilter: string;
    @Input() heading: string;
    @Input() persons: Person[] = [];
    @Input() filter: string;

}
