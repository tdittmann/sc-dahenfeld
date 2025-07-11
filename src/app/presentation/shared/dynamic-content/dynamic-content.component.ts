import { Component, Input } from '@angular/core';
import { DynamicContent } from '../../../core/domain/dynamic-content/dynamic-content.model';
import { CardContainerComponent } from '../card-container/card-container.component';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: 'dynamic-content.component.html',
  imports: [CardContainerComponent, ListItemComponent],
})
export class DynamicContentComponent {
  @Input() contents: DynamicContent[] = [];
}
