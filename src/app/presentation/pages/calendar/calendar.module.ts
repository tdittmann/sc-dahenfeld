import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CalendarPage} from './calendar.page';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {MatchCardModule} from '../../shared/match-card/match-card.module';
import {EventCardModule} from '../../shared/event-card/event-card.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [CalendarService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        MatchCardModule,
        EventCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: CalendarPage,
            }
        ]),
    ],
    declarations: [CalendarPage]
})
export class CalendarPageModule {
}
