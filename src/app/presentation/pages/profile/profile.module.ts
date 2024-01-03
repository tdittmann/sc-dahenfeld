import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ProfilePage} from './profile.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
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
