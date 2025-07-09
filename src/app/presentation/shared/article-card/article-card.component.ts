import { Component, Input } from '@angular/core';
import { Article } from '../../../core/domain/article.model';

@Component({
    selector: 'app-article-card',
    templateUrl: 'article-card.component.html',
    styleUrls: ['article-card.component.scss'],
    standalone: false
})
export class ArticleCardComponent {
  @Input() type: 'large' | 'small' = 'small';
  @Input() article: Article;
}
