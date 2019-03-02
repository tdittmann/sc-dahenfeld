import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ArticleCardComponent} from '../../components/article-card/article-card.component';
import {NewsPage} from './news.page';
import {ArticleService} from '../../../dataproviders/articles/article.service';
import {HttpClientModule} from '@angular/common/http';
import {PageHeaderComponent} from '../../components/page-header/page-header.component';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: NewsPage
            }
        ])
    ],
    declarations: [NewsPage, ArticleCardComponent, PageHeaderComponent]
})
export class NewsPageModule {
}
