import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {CalendarPage} from './calendar.page';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {EventCardComponent} from './event-card/event-card.component';
import {MatchCardModule} from '../../shared/match-card/match-card.module';
import {MatchDetailPageModule} from '../match-detail/match-detail.module';

@NgModule({
    providers: [CalendarService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        MatchCardModule,
        MatchDetailPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: CalendarPage,
            }
        ])
    ],
    declarations: [CalendarPage, EventCardComponent]
})
export class CalendarPageModule {
}
