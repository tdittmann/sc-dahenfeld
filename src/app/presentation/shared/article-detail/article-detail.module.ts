import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleImageMetaModule } from '../article-image-meta/article-image-meta.module';

@NgModule({
  providers: [],
  imports: [CommonModule, IonicModule, ArticleImageMetaModule],
  declarations: [ArticleDetailComponent],
  exports: [ArticleDetailComponent],
})
export class ArticleDetailModule {}
