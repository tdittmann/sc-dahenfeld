import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {PersonPage} from './person.page';
import {PlayerStatisticComponent} from './playerStatistic/player-statistic.component';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule
    ],
    declarations: [PersonPage, PlayerStatisticComponent],
    exports: [PersonPage],
    entryComponents: [PersonPage]
})
export class PersonModule {

}
