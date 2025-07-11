import { Component, Input } from '@angular/core';
import { Article } from '../../../core/domain/article.model';
import { NgStyle } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-article-image-meta',
  templateUrl: 'article-image-meta.component.html',
  styleUrls: ['article-image-meta.component.scss'],
  imports: [NgStyle, IonicModule],
})
export class ArticleImageMetaComponent {
  @Input() article: Article;
  @Input() showOnlyTitle = false;

  showCategory(): boolean {
    return this.article?.categoryName && !this.showOnlyTitle;
  }

  showAuthor(): boolean {
    return this.article?.createdBy && !this.showOnlyTitle;
  }

  showMeta(): boolean {
    return this.article && !this.showOnlyTitle;
  }
}
