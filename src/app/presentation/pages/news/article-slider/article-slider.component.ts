import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../../../../core/domain/article.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-article-slider',
    templateUrl: 'article-slider.component.html',
    styleUrls: ['article-slider.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class ArticleSliderComponent {
  @Input() articles: Article[] = [];

  constructor(private router: Router) {}

  public goToArticleDetail(article: Article) {
    this.router.navigate([article.getArticleLink()]);
  }
}
