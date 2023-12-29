import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {StatisticsCardComponent} from './statistics-card.component';
import {OrderModule} from '../../../../../util/order-pipe/order.module';
import {StatisticsItemModule} from '../statistics-item/statistics-item.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderModule,
        StatisticsItemModule,
    ],
    declarations: [StatisticsCardComponent],
    exports: [StatisticsCardComponent],
})
export class StatisticsCardModule {

}
