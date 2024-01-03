import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ImprintPage} from './imprint.page';
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
                component: ImprintPage
            }
        ])
    ],
    declarations: [ImprintPage]
})
export class ImprintPageModule {
}
