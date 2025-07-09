import { CalendarEvent } from '../../../core/domain/calendarEvent.model';
import { Component, Input } from '@angular/core';
import { EventDetailPage } from '../../pages/event-detail/event-detail.page';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-event-card',
    templateUrl: 'event-card.component.html',
    styleUrls: ['event-card.component.scss'],
    standalone: false
})
export class EventCardComponent {
  @Input() event: CalendarEvent;

  constructor(private modalController: ModalController) {}

  public openEventDetail() {
    this.modalController
      .create({
        component: EventDetailPage,
        componentProps: {
          event: this.event,
        },
      })
      .then((modal) => modal.present());
  }
}
