import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../../core/domain/article.model';
import { ArticleService } from '../../../../dataproviders/article/article.service';

@Component({
  selector: 'app-team-detail-article',
  templateUrl: 'team-detail-article.component.html',
  styleUrls: ['team-detail-article.component.scss'],
})
export class TeamDetailArticleComponent implements OnInit {
  @Input() articleId = '';

  article: Article;

  isLoading = true;
  isError = false;

  constructor(private articleService: ArticleService) {}

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
