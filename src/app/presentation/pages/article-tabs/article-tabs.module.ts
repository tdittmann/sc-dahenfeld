import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {ArticleTabsPage} from './article-tabs.page';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ArticleDetailModule} from '../../shared/article-detail/article-detail.module';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: 'tabs',
        component: ArticleTabsPage,
        children: [
            {
                path: 'article',
                children: [
                    {
                        path: ':id',
                        loadChildren: () => import('./article-tab/article-tab.module').then(m => m.ArticleTabModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    }
];

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        ArticleDetailModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ArticleTabsPage]
})
export class ArticleTabsPageModule {

}
