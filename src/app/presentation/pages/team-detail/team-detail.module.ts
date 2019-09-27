import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {TeamDetailPage} from './team-detail.page';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {RankingPageModule} from './ranking/ranking.module';
import {SoccerTeamService} from '../../../dataproviders/soccer/soccerTeam.service';
import {FixturePageModule} from './fixture/fixture.module';
import {PlayersPageModule} from './players/players.module';
import {StatisticsPageModule} from './statistics/statistics.module';

@NgModule({
    providers: [SoccerTeamService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: TeamDetailPage
            }
        ]),
        SuperTabsModule,
        RankingPageModule,
        FixturePageModule,
        PlayersPageModule,
        StatisticsPageModule,
    ],
    declarations: [TeamDetailPage]
})
export class TeamDetailPageModule {

}