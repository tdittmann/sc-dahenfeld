import { Component, Input } from '@angular/core';
import { CalendarEvent } from '../../../core/domain/calendarEvent.model';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';
import { IonicModule } from '@ionic/angular';
import { ImageMetaComponent } from '../../shared/image-meta/image-meta.component';

@Component({
  templateUrl: 'event-detail.page.html',
  styleUrls: ['event-detail.page.scss'],
  imports: [ModalHeaderComponent, IonicModule, ImageMetaComponent],
})
export class EventDetailPage {
  @Input() event: CalendarEvent;
}
