import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PersonStatisticsPage} from './person-statistics.page';
import {PersonModule} from '../person/person.module';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {StatisticsCardModule} from '../../shared/statistics-card/statistics-card.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        PersonModule,
        StatisticsCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: PersonStatisticsPage
            }
        ]),
    ],
    declarations: [PersonStatisticsPage]
})
export class PersonStatisticsModule {
}
