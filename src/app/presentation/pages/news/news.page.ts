import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: 'news.page.html'
})
export class NewsPage implements OnInit {

    heading: string;
    articles: Article[] = [];

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

        this.articleService.getAllArticles()
            .subscribe({
                next: (pArticles) => {
                    this.articles = pArticles;
                    this.isLoading = false;
                },
                error: (pError) => {
                    this.isError = true;
                    console.error(pError);
                }

            });
    }

}
