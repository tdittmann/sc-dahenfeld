import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../../dataproviders/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../../core/domain/article.model';
import {LoadingService} from '../../../shared/loading/loading.service';
import {ErrorService} from '../../../shared/error/error.service';

@Component({
    templateUrl: 'article-tab.component.html',
    styleUrls: ['article-tab.component.scss']
})
export class ArticleTabComponent implements OnInit {

    article: Article;

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                this.articleService.getArticle(params['id']).subscribe(
                    article => {
                        this.article = article;
                        this.loadingService.hideLoading();
                    },
                    error => this.errorService.showError('Beitrag konnte nicht gefunden werden')
                );
            },
            error => this.errorService.showError('Beitrag konnte nicht gefunden werden')
        );
    }

}
