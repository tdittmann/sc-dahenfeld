import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderComponent} from './page-header.component';
import {IonicModule} from '@ionic/angular';
import {ErrorModule} from '../error/error.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        ErrorModule
    ],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {

}
