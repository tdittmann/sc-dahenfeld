import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RankingPage} from './ranking.page';
import {RankingService} from '../../../../dataproviders/soccer/ranking/ranking.service';
import {RankingComponentModule} from '../../../shared/ranking/ranking.module';
import {RouterModule} from '@angular/router';
import {PageStateModule} from '../../../shared/page-state/page-state.module';

@NgModule({
    providers: [RankingService],
    imports: [
        CommonModule,
        IonicModule,
        RankingComponentModule,
        RouterModule.forChild([
            {
                path: '',
                component: RankingPage
            }
        ]),
        PageStateModule
    ],
    declarations: [RankingPage],
})
export class RankingPageModule {
}
