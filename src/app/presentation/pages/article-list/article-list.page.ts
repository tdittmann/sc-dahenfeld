import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../core/domain/article.model';
import {combineLatest} from 'rxjs';

@Component({
    templateUrl: 'article-list.page.html',
    styleUrls: ['article-list.page.scss']
})
export class ArticleListPage implements OnInit {

    heading: string;
    articles: Article[] = [];

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private articleService: ArticleService) {

    }

    ngOnInit(): void {

        combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams]).subscribe(
            ([params, queryParams]) => {
                this.heading = queryParams['heading'];

                this.articleService.getArticlesByCategoryId(params['categoryId']).subscribe(
                    articles => {
                        this.articles = articles;
                        this.isLoading = false;
                    },
                    error => {
                        this.isError = true;
                        console.error(error);
                    }
                );
            },
            error => {
                this.isError = error;
                console.error(error);
            }
        );

    }

}
