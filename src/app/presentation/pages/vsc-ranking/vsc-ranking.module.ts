import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {VscService} from '../../../dataproviders/vsc/vsc.service';
import {VscRankingPage} from './vsc-ranking.page';

@NgModule({
    providers: [VscService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: VscRankingPage
            }
        ]),
        PageStateModule,
    ],
    declarations: [VscRankingPage]
})
export class VscRankingPageModule {

}
