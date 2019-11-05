import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {CalendarPage} from './calendar.page';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {EventCardComponent} from './event-card/event-card.component';
import {MatchCardModule} from '../../shared/match-card/match-card.module';
import {MatchDetailPageModule} from '../match-detail/match-detail.module';
import {EventDetailPageModule} from '../event-detail/event-detail.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';

@NgModule({
    providers: [CalendarService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        MatchCardModule,
        MatchDetailPageModule,
        EventDetailPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: CalendarPage,
            }
        ]),
        PageStateModule
    ],
    declarations: [CalendarPage, EventCardComponent]
})
export class CalendarPageModule {
}
