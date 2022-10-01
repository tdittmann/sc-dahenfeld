import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'news', pathMatch: 'full'},
    {path: 'news', loadChildren: () => import ('./presentation/pages/news/news.module').then(m => m.NewsPageModule) },
    {path: 'article/:id', loadChildren: () => import ('./presentation/pages/article-detail/article-detail.module').then(m => m.ArticleDetailPageModule)},
    {path: 'article-list/:categoryId', loadChildren: () => import ('./presentation/pages/article-list/article-list.module').then(m => m.ArticleListPageModule)},
    {path: 'article-tabs', loadChildren: () => import ('./presentation/pages/article-tabs/article-tabs.module').then(m => m.ArticleTabsPageModule)},
    {path: 'chronicle', loadChildren: () => import ('./presentation/pages/chronicle/chronicle.module').then(m => m.ChroniclePageModule)},
    {path: 'calendar', loadChildren: () => import ('./presentation/pages/calendar/calendar.module').then(m => m.CalendarPageModule)},
    {path: 'membership', loadChildren: () => import ('./presentation/pages/membership/membership.module').then(m => m.MembershipPageModule)},
    {path: 'teams', loadChildren: () => import ('./presentation/pages/teams/teams.module').then(m => m.TeamsPageModule)},
    {path: 'team-detail/:id', loadChildren: () => import ('./presentation/pages/team-detail/team-detail.module').then(m => m.TeamDetailPageModule)},
    {path: 'vsc', loadChildren: () => import ('./presentation/pages/vsc-ranking/vsc-ranking.module').then(m => m.VscRankingPageModule)},
    {path: 'birthdays', loadChildren: () => import ('./presentation/pages/birthdays/birthdays.module').then(m => m.BirthdaysPageModule)},
    {path: 'person-statistics', loadChildren: () => import ('./presentation/pages/person-statistics/person-statistics.module').then(m => m.PersonStatisticsModule)},
    {path: 'profile', loadChildren: () => import ('./presentation/pages/profile/profile.module').then(m => m.ProfilePageModule)},
    {path: 'feedback', loadChildren: () => import ('./presentation/pages/feedback/feedback.module').then(m => m.FeedbackPageModule)},
    {path: 'imprint', loadChildren: () => import ('./presentation/pages/imprint/imprint.module').then(m => m.ImprintPageModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        paramsInheritanceStrategy: 'always'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
