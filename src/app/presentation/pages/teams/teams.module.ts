import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {TeamsPage} from './teams.page';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';
import {RankingComponentModule} from '../../shared/ranking/ranking.module';
import {MatchService} from '../../../dataproviders/soccer/matches/match.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [TeamInformationService, MatchService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: TeamsPage
            }
        ]),
        RankingComponentModule,
    ],
    declarations: [TeamsPage]
})
export class TeamsPageModule {

}
