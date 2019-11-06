import {NgModule} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {ArticleListPage} from './article-list.page';
import {ArticleCardModule} from '../../shared/article-card/article-card.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticleListPage
            }
        ]),
        ArticleCardModule,
    ],
    exports: [ArticleListPage],
    declarations: [ArticleListPage]
})
export class ArticleListPageModule {

}
