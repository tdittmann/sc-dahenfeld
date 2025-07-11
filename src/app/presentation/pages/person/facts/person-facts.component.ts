import { Component, Input } from '@angular/core';
import { PersonFact } from '../../../../core/domain/personFact.model';
import { CardContainerComponent } from '../../../shared/card-container/card-container.component';
import { ListItemComponent } from '../../../shared/list-item/list-item.component';

@Component({
  selector: 'app-person-facts',
  templateUrl: 'person-facts.component.html',
  imports: [CardContainerComponent, ListItemComponent],
})
export class PersonFactsComponent {
  @Input() facts: PersonFact[] = [];
}
