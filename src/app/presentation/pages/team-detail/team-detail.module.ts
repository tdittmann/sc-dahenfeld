import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule, Routes} from '@angular/router';
import {TeamDetailPage} from './team-detail.page';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';
import {PageStateModule} from '../../shared/page-state/page-state.module';

const routes: Routes = [
    {
        path: 'tabs',
        component: TeamDetailPage,
        children: [
            {
                path: 'ranking',
                children: [
                    {
                        path: '',
                        loadChildren: './ranking/ranking.module#RankingPageModule'
                    }
                ]
            },
            {
                path: 'fixture',
                children: [
                    {
                        path: '',
                        loadChildren: './fixture/fixture.module#FixturePageModule'
                    }
                ]
            },
            {
                path: 'players',
                children: [
                    {
                        path: '',
                        loadChildren: './players/players.module#PlayersPageModule'
                    }
                ]
            },
            {
                path: 'statistics',
                children: [
                    {
                        path: '',
                        loadChildren: './statistics/statistics.module#StatisticsPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/ranking',
        pathMatch: 'full'
    }
];

@NgModule({
    providers: [TeamInformationService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        RouterModule.forChild(routes),
        PageStateModule
    ],
    declarations: [TeamDetailPage]
})
export class TeamDetailPageModule {

}
