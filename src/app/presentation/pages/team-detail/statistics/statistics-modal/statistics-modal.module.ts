import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {OrderModule} from '../../../../../util/order-pipe/order.module';
import {StatisticsModalComponent} from './statistics-modal.component';
import {StatisticsItemModule} from '../statistics-item/statistics-item.module';
import {ModalHeaderModule} from '../../../../shared/modal-header/modal-header.module';
import {PersonFilter} from './person.filter';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderModule,
        StatisticsItemModule,
        ModalHeaderModule
    ],
    declarations: [StatisticsModalComponent, PersonFilter],
    exports: [StatisticsModalComponent],
})
export class StatisticsModalModule {

}
