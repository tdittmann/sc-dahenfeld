import { Component, Input } from '@angular/core';
import { PersonStatistic } from '../../../../core/domain/personStatistic.model';
import { CardContainerComponent } from '../../../shared/card-container/card-container.component';
import { ListItemComponent } from '../../../shared/list-item/list-item.component';

@Component({
  selector: 'app-person-statistics',
  templateUrl: 'person-statistics.component.html',
  imports: [CardContainerComponent, ListItemComponent],
})
export class PersonStatisticsComponent {
  @Input() statistics: PersonStatistic;

  numberWithThousandSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
