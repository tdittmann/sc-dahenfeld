import { CalendarEvent } from '../../../core/domain/calendarEvent.model';
import { Component, Input, inject } from '@angular/core';
import { EventDetailPage } from '../../pages/event-detail/event-detail.page';
import { ModalController, IonicModule } from '@ionic/angular';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.scss'],
  imports: [IonicModule, NgStyle],
})
export class EventCardComponent {
  private readonly modalController = inject(ModalController);

  @Input() event: CalendarEvent;

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
