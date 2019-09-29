import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {PersonPage} from './person.page';
import {PlayerStatisticComponent} from './playerStatistic/player-statistic.component';

@NgModule({
    providers: [],
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
