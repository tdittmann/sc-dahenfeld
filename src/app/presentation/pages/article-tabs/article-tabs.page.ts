import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../core/domain/article.model';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from '../../shared/tabs/tabs/tabs.component';
import { TabComponent } from '../../shared/tabs/tab/tab.component';
import { ArticleDetailComponent } from '../../shared/article-detail/article-detail.component';

@Component({
  templateUrl: 'article-tabs.page.html',
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, TabsComponent, TabComponent, ArticleDetailComponent],
})
export class ArticleTabsPage implements OnInit {
  private readonly articleService = inject(ArticleService);
  private readonly route = inject(ActivatedRoute);

  heading: string;
  articles: Article[] = [];

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      // Set heading if present
      this.heading = queryParams['heading'];

      // Load articles
      this.articleService.getArticlesById(queryParams['articles']).subscribe({
        next: (pResponse) => {
          this.articles = this.getInitialSortedArticles(queryParams['articles'], pResponse);

          // Increment hits for the article
          this.articles.forEach((value) => {
            this.articleService.incrementMobileHitsForArticle(value);
          });

          this.isLoading = false;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        },
      });
    });
  }

  private getInitialSortedArticles(initialArticleIds: string[], pResponse: Article[]): Article[] {
    const sortedArticles = [];
    initialArticleIds.forEach(function (articleId) {
      let found = false;
      pResponse = pResponse.filter(function (item) {
        if (!found && item.id === articleId) {
          sortedArticles.push(item);
          found = true;
          return false;
        } else {
          return true;
        }
      });
    });
    return sortedArticles;
  }
}
