import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {RouterModule} from '@angular/router';
import {CustomBackendCallPage} from './custom-backend-call.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        RouterModule.forChild([
            {
                path: '',
                component: CustomBackendCallPage
            }
        ])
    ],
    declarations: [CustomBackendCallPage]
})
export class CustomBackendCallPageModule {
}