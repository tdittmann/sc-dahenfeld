import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DynamicContentComponent} from './dynamic-content.component';
import {SharedModule} from '../shared.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [DynamicContentComponent],
    exports: [DynamicContentComponent]
})
export class DynamicContentModule {

}