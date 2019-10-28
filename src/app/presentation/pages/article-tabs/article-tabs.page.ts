import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../core/domain/article.model';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';
import {IonTabs} from '@ionic/angular';

@Component({
    templateUrl: 'article-tabs.page.html',
    styleUrls: ['article-tabs.page.scss']
})
export class ArticleTabsPage implements OnInit {

    @ViewChild('articleTabs', {read: IonTabs, static: false}) tabs: IonTabs;
    heading: string;
    articles: Article[];

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(
            (queryParams) => {

                // Set heading if present
                this.heading = queryParams['heading'];

                // Load articles
                this.articleService.getArticles(queryParams['articles']).subscribe(
                    (pResponse) => {
                        this.articles = this.getInitialSortedArticles(queryParams['articles'], pResponse);

                        // Increment hits for the article
                        this.articles.forEach(value => {
                            this.articleService.incrementMobileHitsForArticle(value);
                        });

                        // Set first tabs
                        this.tabs.select('article/' + this.articles[0].id + '?heading=' + this.heading)
                            .then(value => null);

                        this.loadingService.hideLoading();
                    },
                    (pError) => this.errorService.showError(pError)
                );

            });

    }

    private getInitialSortedArticles(initialArticleIds: string[], pResponse: Article[]): Article[] {
        const sortedArticles = [];
        initialArticleIds.forEach(function (articleId) {
            let found = false;
            pResponse = pResponse.filter(function (item) {
                if (!found && item.id === articleId) {
                    sortedArticles.push(item);
                    found = true;
                    return false;
                } else {
                    return true;
                }
            });
        });
        return sortedArticles;
    }

}
