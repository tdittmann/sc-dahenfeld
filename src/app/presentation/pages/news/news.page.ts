import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { Article } from '../../../core/domain/article.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { ArticleSliderComponent } from './article-slider/article-slider.component';
import { ArticleCardComponent } from '../../shared/article-card/article-card.component';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, ArticleSliderComponent, ArticleCardComponent, RouterLink],
})
export class NewsPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly articleService = inject(ArticleService);

  numberOfFeaturedArticles = 1;
  heading: string;
  articles: Article[] = [];
  sliderArticles: Article[] = [];

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.onResize();

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.loadArticles(null);
  }

  loadArticles(event) {
    this.articleService.getAllArticles().subscribe({
      next: (pArticles) => {
        this.articles = pArticles;

        // The first three articles should be shown as slide
        for (let i = 0; i < 3; i++) {
          this.sliderArticles.push(this.articles.shift());
        }

        this.isLoading = false;
        this.completeEvent(event);
      },
      error: (pError) => {
        this.isError = true;
        console.error(pError);
        this.completeEvent(event);
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

  completeEvent(event) {
    if (event) {
      event.target.complete();
    }
  }
}
