import {Component, Input} from '@angular/core';
import {Person} from '../../../../../core/domain/person.model';

@Component({
    selector: 'statistics-card',
    templateUrl: 'statistics-card.component.html',
    styleUrls: ['statistics-card.component.scss']
})
export class StatisticsCardComponent {

    @Input() persons: Person[] = [];
    @Input() heading: string;
    @Input() statisticFilter: string;

    constructor() {

    }

}
