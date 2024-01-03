import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RankingPage} from './ranking.page';
import {RankingComponentModule} from '../../../shared/ranking/ranking.module';
import {RouterModule} from '@angular/router';
import {MatchService} from '../../../../dataproviders/soccer/matches/match.service';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    providers: [MatchService],
    imports: [
        CommonModule,
        IonicModule,
        RankingComponentModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: RankingPage
            }
        ]),
    ],
    declarations: [RankingPage],
})
export class RankingPageModule {
}
