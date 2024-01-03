import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {StatisticsCardComponent} from './statistics-card.component';
import {OrderModule} from '../../../util/order-pipe/order.module';
import {StatisticsItemModule} from '../statistics-item/statistics-item.module';
import {SharedModule} from '../shared.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderModule,
        StatisticsItemModule,
        SharedModule,
    ],
    declarations: [StatisticsCardComponent],
    exports: [StatisticsCardComponent],
})
export class StatisticsCardModule {

}
