import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {OrderModule} from 'ngx-order-pipe';
import {StatisticsModalComponent} from './statistics-modal.component';
import {StatisticsItemModule} from '../statistics-item/statistics-item.module';
import {ModalHeaderModule} from '../../../../shared/modal-header/modal-header.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderModule,
        StatisticsItemModule,
        ModalHeaderModule,
    ],
    declarations: [StatisticsModalComponent],
    exports: [StatisticsModalComponent],
    entryComponents: [StatisticsModalComponent]
})
export class StatisticsModalModule {

}
