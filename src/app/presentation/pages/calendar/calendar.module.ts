import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CalendarPage } from './calendar.page';
import { CalendarService } from '../../../dataproviders/calendar/calendar.service';

import { EventCardModule } from '../../shared/event-card/event-card.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [CalendarService],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    EventCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPage,
      },
    ]),
    CalendarPage,
  ],
})
export class CalendarPageModule {}
