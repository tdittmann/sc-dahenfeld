import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../../core/domain/person.model';

@Component({
    selector: 'statistics-item',
    templateUrl: 'statistics-item.component.html',
    styleUrls: ['statistics-item.component.scss']
})
export class StatisticsItemComponent implements OnInit {

    @Input() person: Person;
    @Input() filter: string;

    projectId = 0;
    statisticsVariable: string;
    fieldVariable: string;

    constructor() {

    }

    ngOnInit(): void {
        const splitted = this.filter.split('.');
        this.statisticsVariable = splitted[0];
        this.fieldVariable = splitted[1];
    }

}
