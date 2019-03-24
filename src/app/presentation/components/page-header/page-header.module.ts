import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderComponent} from './page-header.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {

}
