import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {StatisticsCardComponent} from './statistics-card.component';
import {StatisticsItemModule} from '../statistics-item/statistics-item.module';
import {SharedModule} from '../shared.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StatisticsItemModule,
        SharedModule,
    ],
    declarations: [StatisticsCardComponent],
    exports: [StatisticsCardComponent],
})
export class StatisticsCardModule {

}
