import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {CalendarPage} from './calendar.page';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {CalendarCardEventComponent} from './event/calendar-card-event.component';
import {CalendarCardMatchComponent} from './match/calendar-card-match.component';

@NgModule({
    providers: [CalendarService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: CalendarPage
            }
        ])
    ],
    declarations: [CalendarPage, CalendarCardEventComponent, CalendarCardMatchComponent]
})
export class CalendarPageModule {
}
