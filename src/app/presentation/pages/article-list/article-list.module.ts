import {NgModule} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ArticleListPage} from './article-list.page';
import {ArticleCardModule} from '../../shared/article-card/article-card.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
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
