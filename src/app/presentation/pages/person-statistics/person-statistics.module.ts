import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {PersonStatisticsPage} from './person-statistics.page';
import {PersonModule} from '../person/person.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {StatisticsCardModule} from '../team-detail/statistics/statistics-card/statistics-card.module';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        PersonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PersonStatisticsPage
            }
        ]),
        PageStateModule,
        StatisticsCardModule
    ],
    declarations: [PersonStatisticsPage]
})
export class PersonStatisticsModule {
}
