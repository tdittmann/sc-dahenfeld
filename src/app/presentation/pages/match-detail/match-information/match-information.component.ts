import { Component, Input } from '@angular/core';
import { CardContainerComponent } from '../../../shared/card-container/card-container.component';
import { ListItemComponent } from '../../../shared/list-item/list-item.component';

@Component({
  selector: 'app-match-information',
  templateUrl: 'match-information.component.html',
  imports: [CardContainerComponent, ListItemComponent],
})
export class MatchInformationComponent {
  @Input() date: string;
  @Input() location: string;
  @Input() fixture: string;
}
