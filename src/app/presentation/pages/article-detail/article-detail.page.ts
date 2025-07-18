import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { Article } from '../../../core/domain/article.model';
import { combineLatest } from 'rxjs';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailComponent } from '../../shared/article-detail/article-detail.component';

@Component({
  templateUrl: 'article-detail.page.html',
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, ArticleDetailComponent],
})
export class ArticleDetailPage implements OnInit {
  private readonly articleService = inject(ArticleService);
  private readonly route = inject(ActivatedRoute);

  heading: string;
  article: Article;
  showImageHeader = true;
  showOnlyTitle = false;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.loadArticle(null);
  }

  loadArticle(event) {
    combineLatest([this.route.params, this.route.queryParams]).subscribe(([params, queryParams]) => {
      // Handle query params
      this.heading = queryParams['heading'];
      this.showImageHeader = queryParams['showImageHeader'] ? queryParams['showImageHeader'] === 'true' : true;
      this.showOnlyTitle = queryParams['showOnlyTitle'];

      // Load article
      this.articleService.getArticleById(params['id']).subscribe({
        next: (pResponse) => {
          this.article = pResponse;

          // Increment hits for the article
          this.articleService.incrementMobileHitsForArticle(this.article);

          this.isLoading = false;
          this.completeEvent(event);
        },
        error: (pError) => {
          this.isError = true;
          console.error(pError);
          this.completeEvent(event);
        },
      });
    });
  }

  completeEvent(event) {
    if (event) {
      event.target.complete();
    }
  }
}
