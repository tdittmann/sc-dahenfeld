import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {StatisticsPage} from './statistics.page';
import {RouterModule} from '@angular/router';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {StatisticsCardModule} from './statistics-card/statistics-card.module';
import {StatisticsModalModule} from './statistics-modal/statistics-modal.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        StatisticsCardModule,
        StatisticsModalModule,
        RouterModule.forChild([
            {
                path: '',
                component: StatisticsPage
            }
        ]),
    ],
    declarations: [StatisticsPage],
})
export class StatisticsPageModule {
}
