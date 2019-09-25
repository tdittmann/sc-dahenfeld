import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {StatisticsPage} from './statistics.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [StatisticsPage],
    exports: [StatisticsPage],
    entryComponents: [StatisticsPage],
})
export class StatisticsPageModule {
}
