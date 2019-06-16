import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {PageHeaderModule} from '../../components/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {ProfilePage} from './profile.page';
import {ToastService} from '../../../dataproviders/toast.service';
import {ProfileService} from '../../../dataproviders/profile/profile.service';

@NgModule({
    providers: [ProfileService, ToastService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
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
