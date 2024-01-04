import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticleCardComponent } from './article-card.component';

@NgModule({
  providers: [],
  imports: [CommonModule, IonicModule],
  declarations: [ArticleCardComponent],
  exports: [ArticleCardComponent],
})
export class ArticleCardModule {}
