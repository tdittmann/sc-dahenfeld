import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RankingPage} from './ranking.page';
import {RankingComponentModule} from '../../../shared/ranking/ranking.module';
import {RouterModule} from '@angular/router';
import {PageStateModule} from '../../../shared/page-state/page-state.module';
import {MatchService} from '../../../../dataproviders/soccer/matches/match.service';

@NgModule({
    providers: [MatchService],
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
