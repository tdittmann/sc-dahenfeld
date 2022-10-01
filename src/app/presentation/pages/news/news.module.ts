import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NewsPage} from './news.page';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {ArticleCardModule} from '../../shared/article-card/article-card.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        ArticleCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: NewsPage
            }
        ]),
    ],
    declarations: [NewsPage]
})
export class NewsPageModule {
}
