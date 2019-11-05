import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ArticleDetailPage} from './article-detail.page';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {ArticleDetailModule} from '../../shared/article-detail/article-detail.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        ArticleDetailModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticleDetailPage
            }
        ]),
        PageStateModule
    ],
    exports: [
        ArticleDetailPage
    ],
    declarations: [ArticleDetailPage]
})
export class ArticleDetailPageModule {
}
