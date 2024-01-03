import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NewsPage} from './news.page';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ArticleSliderModule} from './article-slider/article-slider.module';
import {ArticleCardModule} from '../../shared/article-card/article-card.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        ArticleSliderModule,
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
