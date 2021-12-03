import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'news.page.html',
    styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {

    heading: string;
    articles: Article[] = [];
    sliderArticles: Article[] = [];

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private articleService: ArticleService) {

    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.loadArticles(null);
    }

    loadArticles(event) {
        this.articleService.getAllArticles()
            .subscribe({
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
                }

            });
    }

    completeEvent(event) {
        if (event) {
            event.target.complete();
        }
    }

}
