import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../../../../core/domain/article.model';
import { Router } from '@angular/router';
import { ArticleImageMetaComponent } from '../../../shared/article-image-meta/article-image-meta.component';

@Component({
  selector: 'app-article-slider',
  templateUrl: 'article-slider.component.html',
  styleUrls: ['article-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [ArticleImageMetaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArticleSliderComponent {
  private readonly router = inject(Router);

  @Input() articles: Article[] = [];

  public goToArticleDetail(article: Article) {
    this.router.navigate([article.getArticleLink()]);
  }
}
