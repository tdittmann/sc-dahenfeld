import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {PersonPage} from './person.page';
import {PlayerStatisticComponent} from './playerStatistic/player-statistic.component';
import {PlayerService} from '../../../dataproviders/soccer/players/player.service';

@NgModule({
    providers: [PlayerService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule
    ],
    declarations: [PersonPage, PlayerStatisticComponent],
    exports: [PersonPage],
    entryComponents: [PersonPage]
})
export class PersonModule {

}
