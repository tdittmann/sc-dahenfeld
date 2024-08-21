import { Component, Input, OnChanges } from '@angular/core';
import { Person } from '../../../core/domain/person.model';
import { OrderPipe } from '../order-pipe/order.pipe';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-statistics-card',
  templateUrl: 'statistics-card.component.html',
})
export class StatisticsCardComponent implements OnChanges {
  @Input() persons: Person[] = [];
  @Input() heading: string;
  @Input() statisticFilter: string;
  @Input() devModeEnabled: boolean = false;

  private orderPipe = new OrderPipe();

  statisticsVariable: string;
  fieldVariable: string;
  filteredPersons: Person[] = [];

  ngOnChanges(): void {
    const splitted = this.statisticFilter.split('.');
    this.statisticsVariable = splitted[0];
    this.fieldVariable = splitted[1];
    this.filteredPersons = this.orderPipe
      .transform(this.persons, this.statisticFilter, true)
      .filter((value: Person) => value.showOnFrontend || this.devModeEnabled);
  }

  protected readonly filter = filter;
}
