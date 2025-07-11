import { NgModule } from '@angular/core';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ArticleListPage } from './article-list.page';

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
        component: ArticleListPage,
      },
    ]),
    ArticleListPage,
  ],
  exports: [ArticleListPage],
})
export class ArticleListPageModule {}
