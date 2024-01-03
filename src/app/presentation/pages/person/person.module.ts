import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PersonPage} from './person.page';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {ModalHeaderModule} from '../../shared/modal-header/modal-header.module';
import {SharedModule} from '../../shared/shared.module';
import {PersonOverviewComponent} from './overview/person-overview.component';
import {PersonStatisticsComponent} from './statistics/person-statistics.component';

@NgModule({
    providers: [
        PersonService,
    ],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        ModalHeaderModule,
    ],
    declarations: [
        PersonPage,
        PersonOverviewComponent,
        PersonStatisticsComponent,
    ],
    exports: [PersonPage],
})
export class PersonModule {

}
