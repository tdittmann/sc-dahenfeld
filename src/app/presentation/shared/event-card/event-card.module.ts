import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventCardComponent } from './event-card.component';
import { EventDetailPageModule } from '../../pages/event-detail/event-detail.module';

@NgModule({
  providers: [],
  imports: [CommonModule, IonicModule, EventDetailPageModule, EventCardComponent],
  exports: [EventCardComponent],
})
export class EventCardModule {}
