import { Component, Input, OnChanges } from '@angular/core';
import { Person } from '../../../core/domain/person.model';

@Component({
  selector: 'app-statistics-card',
  templateUrl: 'statistics-card.component.html',
})
export class StatisticsCardComponent implements OnChanges {
  @Input() persons: Person[] = [];
  @Input() heading: string;
  @Input() statisticFilter: string;

  statisticsVariable: string;
  fieldVariable: string;

  ngOnChanges(): void {
    const splitted = this.statisticFilter.split('.');
    this.statisticsVariable = splitted[0];
    this.fieldVariable = splitted[1];
  }
}
