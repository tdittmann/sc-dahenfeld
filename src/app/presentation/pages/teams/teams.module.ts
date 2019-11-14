import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {TeamsPage} from './teams.page';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';
import {RankingComponentModule} from '../../shared/ranking/ranking.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {MatchService} from '../../../dataproviders/soccer/matches/match.service';

@NgModule({
    providers: [TeamInformationService, MatchService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: TeamsPage
            }
        ]),
        RankingComponentModule,
        PageStateModule,
    ],
    declarations: [TeamsPage]
})
export class TeamsPageModule {

}
