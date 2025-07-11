import { Component, Input } from '@angular/core';
import { TimelineEntry } from '../../../../core/domain/timeline-entry.model';
import { NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.scss'],
  imports: [NgClass, IonicModule, RouterLink],
})
export class TimelineComponent {
  @Input() timelineEntries: TimelineEntry[] = [];
}
