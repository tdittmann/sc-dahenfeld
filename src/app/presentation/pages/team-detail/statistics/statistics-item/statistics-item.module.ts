import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {StatisticsItemComponent} from './statistics-item.component';
import {PersonModule} from '../../../person/person.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PersonModule,
    ],
    declarations: [StatisticsItemComponent],
    exports: [StatisticsItemComponent],
    entryComponents: [StatisticsItemComponent]
})
export class StatisticsItemModule {

}
