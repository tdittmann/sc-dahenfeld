import { Component, Input } from '@angular/core';
import { DynamicContent } from '../../../core/domain/dynamic-content/dynamic-content.model';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: 'dynamic-content.component.html',
})
export class DynamicContentComponent {
  @Input() contents: DynamicContent[] = [];
}
