import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventDetailPage } from './event-detail.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [],
  imports: [CommonModule, IonicModule, SharedModule, EventDetailPage],
  exports: [EventDetailPage],
})
export class EventDetailPageModule {}
