import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'news', pathMatch: 'full'},
    {path: 'news', loadChildren: './presentation/pages/news/news.module#NewsPageModule'},
    {path: 'article/:id', loadChildren: './presentation/pages/article-detail/article-detail.module#ArticleDetailPageModule'},
    {path: 'chronicle', loadChildren: './presentation/pages/chronicle/chronicle.module#ChroniclePageModule'},
    {path: 'profile', loadChildren: './presentation/pages/profile/profile.module#ProfilePageModule'},
    {path: 'imprint', loadChildren: './presentation/pages/imprint/imprint.module#ImprintPageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
