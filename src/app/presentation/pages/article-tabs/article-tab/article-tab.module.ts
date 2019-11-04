import {NgModule} from '@angular/core';
import {ArticleService} from '../../../../dataproviders/article/article.service';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ArticleDetailModule} from '../../../shared/article-detail/article-detail.module';
import {RouterModule} from '@angular/router';
import {ArticleTabComponent} from './article-tab.component';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        ArticleDetailModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticleTabComponent
            }
        ])
    ],
    declarations: [ArticleTabComponent]
})
export class ArticleTabModule {

}