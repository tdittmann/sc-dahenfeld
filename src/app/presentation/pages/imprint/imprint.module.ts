import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../components/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {ImprintPage} from './imprint.page';
import {ToastService} from '../../../dataproviders/toast.service';

@NgModule({
    providers: [ToastService],
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
