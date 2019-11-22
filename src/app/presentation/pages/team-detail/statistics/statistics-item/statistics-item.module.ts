import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {StatisticsItemComponent} from './statistics-item.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [StatisticsItemComponent],
    exports: [StatisticsItemComponent],
    entryComponents: [StatisticsItemComponent]
})
export class StatisticsItemModule {

}
