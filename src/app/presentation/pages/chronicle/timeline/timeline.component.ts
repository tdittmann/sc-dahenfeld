import { Component, Input } from '@angular/core';
import { TimelineEntry } from '../../../../core/domain/timeline-entry.model';

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.scss'],
})
export class TimelineComponent {
  @Input() timelineEntries: TimelineEntry[] = [];

  constructor() {}
}
