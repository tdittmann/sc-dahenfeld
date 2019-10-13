import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {ArticleTabsPage} from './article-tabs.page';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import {ArticleDetailModule} from '../../shared/article-detail/article-detail.module';

@NgModule({
    providers: [ArticleService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        SuperTabsModule,
        ArticleDetailModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticleTabsPage
            }
        ])
    ],
    declarations: [ArticleTabsPage]
})
export class ArticleTabsPageModule {

}
