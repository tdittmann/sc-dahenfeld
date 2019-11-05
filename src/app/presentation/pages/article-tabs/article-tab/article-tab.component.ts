import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../../dataproviders/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../../core/domain/article.model';

@Component({
    templateUrl: 'article-tab.component.html',
    styleUrls: ['article-tab.component.scss']
})
export class ArticleTabComponent implements OnInit {

    article: Article;

    isLoading = true;
    isError = false;

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                this.articleService.getArticle(params['id']).subscribe(
                    article => {
                        this.article = article;
                        this.isLoading = false;
                    },
                    error => {
                        this.isError = true;
                        console.error(error);
                    }
                );
            },
            error => {
                this.isError = true;
                console.error(error);
            }
        );
    }

}
