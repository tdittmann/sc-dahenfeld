import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {combineLatest} from 'rxjs';

@Component({
    selector: 'article-detail',
    templateUrl: 'article-detail.page.html',
    styleUrls: ['article-detail.page.scss']
})
export class ArticleDetailPage implements OnInit {

    article: Article;
    showOnlyTitle = false;

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {

        combineLatest(this.route.params, this.route.queryParams)
            .subscribe(([params, queryParams]) => {

                // Load article
                this.articleService.getArticle(params['id']).subscribe(
                    (pResponse) => {
                        this.article = pResponse;

                        // Increment hits for the article
                        this.articleService.incrementMobileHitsForArticle(this.article);
                    },
                    (pError) => {
                        // TODO tdit0703: Correct error handling
                        console.error(pError);
                    }
                );

                // Handle query params
                this.showOnlyTitle = queryParams['showOnlyTitle'];
            });
    }

}
