import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderComponent} from './page-header.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {

}
