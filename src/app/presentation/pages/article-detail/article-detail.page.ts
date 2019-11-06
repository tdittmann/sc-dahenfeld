import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {combineLatest} from 'rxjs';

@Component({
    templateUrl: 'article-detail.page.html',
    styleUrls: ['article-detail.page.scss']
})
export class ArticleDetailPage implements OnInit {

    heading: string;
    article: Article;
    showOnlyTitle = false;

    isLoading = true;
    isError = false;

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        combineLatest([this.route.params, this.route.queryParams])
            .subscribe(([params, queryParams]) => {

                // Handle query params
                this.heading = queryParams['heading'];
                this.showOnlyTitle = queryParams['showOnlyTitle'];

                // Load article
                this.articleService.getArticleById(params['id']).subscribe(
                    (pResponse) => {
                        this.article = pResponse;

                        // Increment hits for the article
                        this.articleService.incrementMobileHitsForArticle(this.article);

                        this.isError = true;
                    },
                    (pError) => {
                        this.isError = true;
                        console.error(pError);
                    }
                );
            });
    }

}
