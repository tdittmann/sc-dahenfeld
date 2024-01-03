import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {TeamDetailPage} from './team-detail.page';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: 'tabs',
        component: TeamDetailPage,
        children: [
            {
                path: 'article',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./article/article.module').then(m => m.ArticlePageModule)
                    }
                ]
            },
            {
                path: 'ranking',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./ranking/ranking.module').then(m => m.RankingPageModule)
                    }
                ]
            },
            {
                path: 'fixture',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./fixture/fixture.module').then(m => m.FixturePageModule)
                    }
                ]
            },
            {
                path: 'players',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./players/players.module').then(m => m.PlayersPageModule)
                    }
                ]
            },
            {
                path: 'statistics',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/article',
        pathMatch: 'full'
    }
];

@NgModule({
    providers: [TeamInformationService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [TeamDetailPage]
})
export class TeamDetailPageModule {

}
