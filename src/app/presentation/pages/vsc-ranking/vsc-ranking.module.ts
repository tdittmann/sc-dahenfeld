import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {VscService} from '../../../dataproviders/vsc/vsc.service';
import {VscRankingPage} from './vsc-ranking.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [VscService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: VscRankingPage
            }
        ]),
    ],
    declarations: [VscRankingPage]
})
export class VscRankingPageModule {

}
