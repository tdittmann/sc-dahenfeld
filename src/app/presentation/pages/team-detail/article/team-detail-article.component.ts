import { Component, Input, OnInit, inject } from '@angular/core';
import { Article } from '../../../../core/domain/article.model';
import { ArticleService } from '../../../../dataproviders/article/article.service';
import { PageStateComponent } from '../../../shared/page-state/page-state.component';

@Component({
  selector: 'app-team-detail-article',
  templateUrl: 'team-detail-article.component.html',
  styleUrls: ['team-detail-article.component.scss'],
  imports: [PageStateComponent],
})
export class TeamDetailArticleComponent implements OnInit {
  private readonly articleService = inject(ArticleService);

  @Input() articleId = '';

  article: Article;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    if (this.articleId) {
      this.articleService.getArticleById(this.articleId).subscribe({
        next: (article) => {
          this.article = article;
          this.isLoading = false;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        },
      });
    }
  }
}
