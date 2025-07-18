import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NewsPage } from './news.page';
import { ArticleService } from '../../../dataproviders/article/article.service';

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
        component: NewsPage,
      },
    ]),
    NewsPage,
  ],
})
export class NewsPageModule {}
