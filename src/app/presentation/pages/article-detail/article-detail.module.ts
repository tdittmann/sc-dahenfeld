import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {HttpClientModule} from '@angular/common/http';
import {ArticleDetailPage} from './article-detail.page';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {ArticleDetailModule} from '../../shared/article-detail/article-detail.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        ArticleDetailModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticleDetailPage
            }
        ])
    ],
    exports: [
        ArticleDetailPage
    ],
    declarations: [ArticleDetailPage]
})
export class ArticleDetailPageModule {
}
