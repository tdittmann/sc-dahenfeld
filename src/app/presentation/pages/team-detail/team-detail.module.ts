import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {TeamDetailPage} from './team-detail.page';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {RankingPageModule} from './ranking/ranking.module';
import {FixturePageModule} from './fixture/fixture.module';
import {PlayersPageModule} from './players/players.module';
import {StatisticsPageModule} from './statistics/statistics.module';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';

@NgModule({
    providers: [TeamInformationService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
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
