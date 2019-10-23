import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {ProfilePage} from './profile.page';
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
                component: ProfilePage
            }
        ])
    ],
    declarations: [ProfilePage]
})
export class ProfilePageModule {
}
