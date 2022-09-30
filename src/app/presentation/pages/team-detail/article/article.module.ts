import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {PageStateModule} from '../../../shared/page-state/page-state.module';
import {ArticlePage} from './article.page';
import {ArticleService} from '../../../../dataproviders/article/article.service';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticlePage
            }
        ]),
        PageStateModule
    ],
    declarations: [ArticlePage],
})
export class ArticlePageModule {

}
