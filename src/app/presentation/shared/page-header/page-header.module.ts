import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderComponent} from './page-header.component';
import {IonicModule} from '@ionic/angular';
import {ErrorModule} from '../error/error.module';
import {LoadingModule} from '../loading/loading.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        ErrorModule,
        LoadingModule,
    ],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {

}
