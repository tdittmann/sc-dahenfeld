import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';

@Component({
    templateUrl: 'news.page.html',
    styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {

    /**
     * Default is zero, so we get all articles
     */
    categoryId = 0;
    articles: Article[] = [];
    sliderArticles: Article[] = [];

    constructor(private articleService: ArticleService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        this.articleService.getAllArticles(this.categoryId)
            .subscribe(
                (pArticles) => {
                    this.articles = pArticles;

                    // The first three articles should be shown as slide
                    for (let i = 0; i < 3; i++) {
                        this.sliderArticles.push(this.articles.shift());
                    }

                    this.loadingService.hideLoading();
                },
                (pError) => this.errorService.showError(pError)
            );
    }

}
