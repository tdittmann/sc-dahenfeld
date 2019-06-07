import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ArticleCardComponent} from '../../components/article-card/article-card.component';
import {NewsPage} from './news.page';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {HttpClientModule} from '@angular/common/http';
import {ArticleSliderComponent} from '../../components/article-slider/article-slider.component';
import {PageHeaderModule} from '../../components/page-header/page-header.module';
import {ArticleImageMetaModule} from '../../components/article-image-meta/article-image-meta.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        ArticleImageMetaModule,
        RouterModule.forChild([
            {
                path: '',
                component: NewsPage
            }
        ])
    ],
    declarations: [NewsPage, ArticleCardComponent, ArticleSliderComponent]
})
export class NewsPageModule {
}
