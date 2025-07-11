import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../../core/domain/article.model';
import { combineLatest } from 'rxjs';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { ArticleCardComponent } from '../../shared/article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  templateUrl: 'article-list.page.html',
  styleUrls: ['article-list.page.scss'],
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, ArticleCardComponent, RouterLink],
})
export class ArticleListPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly articleService = inject(ArticleService);

  numberOfFeaturedArticles = 1;
  heading: string;
  articles: Article[] = [];

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.onResize();

    combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams]).subscribe({
      next: ([params, queryParams]) => {
        this.heading = queryParams['heading'];

        this.articleService.getArticlesByCategoryId(params['categoryId']).subscribe({
          next: (articles) => {
            this.articles = articles;
            this.isLoading = false;
          },
          error: (error) => {
            this.isError = true;
            console.error(error);
          },
        });
      },
      error: (error) => {
        this.isError = error;
        console.error(error);
      },
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      this.numberOfFeaturedArticles = 2;
    } else if (window.innerWidth >= 992) {
      this.numberOfFeaturedArticles = 3;
    } else {
      this.numberOfFeaturedArticles = 1;
    }
  }
}
