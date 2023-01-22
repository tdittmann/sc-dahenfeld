import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {SportheimPage} from './sportheim.page';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {SportheimService} from '../../../dataproviders/sportheim/sportheim.service';

@NgModule({
    providers: [SportheimService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        RouterModule.forChild([
            {
                path: '',
                component: SportheimPage
            }
        ])
    ],
    declarations: [SportheimPage]
})
export class SportheimPageModule {
}
