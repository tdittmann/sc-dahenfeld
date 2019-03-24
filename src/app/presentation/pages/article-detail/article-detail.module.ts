import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ArticleService} from '../../../dataproviders/articles/article.service';
import {HttpClientModule} from '@angular/common/http';
import {ArticleDetailPage} from './article-detail.page';
import {PageHeaderModule} from '../../components/page-header/page-header.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticleDetailPage
            }
        ])
    ],
    declarations: [ArticleDetailPage]
})
export class ArticleDetailPageModule {
}
