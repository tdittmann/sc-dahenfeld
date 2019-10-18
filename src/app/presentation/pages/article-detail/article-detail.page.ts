import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {combineLatest} from 'rxjs';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';

@Component({
    templateUrl: 'article-detail.page.html',
    styleUrls: ['article-detail.page.scss']
})
export class ArticleDetailPage implements OnInit {

    article: Article;
    showOnlyTitle = false;

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        combineLatest([this.route.params, this.route.queryParams])
            .subscribe(([params, queryParams]) => {

                // Handle query params
                this.showOnlyTitle = queryParams['showOnlyTitle'];

                // Load article
                this.articleService.getArticle(params['id']).subscribe(
                    (pResponse) => {
                        this.article = pResponse;

                        // Increment hits for the article
                        this.articleService.incrementMobileHitsForArticle(this.article);

                        this.loadingService.hideLoading();
                    },
                    (pError) => this.errorService.showError(pError)
                );
            });
    }

}
