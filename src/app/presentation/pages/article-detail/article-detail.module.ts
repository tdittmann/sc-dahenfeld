import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { ArticleDetailPage } from './article-detail.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [ArticleService],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArticleDetailPage,
      },
    ]),
    ArticleDetailPage,
  ],
  exports: [ArticleDetailPage],
})
export class ArticleDetailPageModule {}
