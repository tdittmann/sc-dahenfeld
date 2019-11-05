import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageStateComponent} from './page-state.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [PageStateComponent],
    exports: [PageStateComponent]
})
export class PageStateModule {

}