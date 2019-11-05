import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule, Routes} from '@angular/router';
import {ArticleTabsPage} from './article-tabs.page';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ArticleDetailModule} from '../../shared/article-detail/article-detail.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';

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
                        loadChildren: './article-tab/article-tab.module#ArticleTabModule'
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
        PageHeaderModule,
        ArticleDetailModule,
        RouterModule.forChild(routes),
        PageStateModule
    ],
    declarations: [ArticleTabsPage]
})
export class ArticleTabsPageModule {

}
