import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {ImprintPage} from './imprint.page';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: ImprintPage
            }
        ])
    ],
    declarations: [ImprintPage]
})
export class ImprintPageModule {
}
