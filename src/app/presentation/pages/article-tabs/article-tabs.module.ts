import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ArticleTabsPage } from './article-tabs.page';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { ArticleDetailModule } from '../../shared/article-detail/article-detail.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [ArticleService],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ArticleDetailModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArticleTabsPage,
      },
    ]),
  ],
  declarations: [ArticleTabsPage],
})
export class ArticleTabsPageModule {}
