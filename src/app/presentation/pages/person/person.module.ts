import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PersonPage} from './person.page';
import {PlayerStatisticComponent} from './playerStatistic/player-statistic.component';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {ModalHeaderModule} from '../../shared/modal-header/modal-header.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        ModalHeaderModule
    ],
    declarations: [PersonPage, PlayerStatisticComponent],
    exports: [PersonPage],
})
export class PersonModule {

}
