import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../core/domain/article.model';

@Component({
    templateUrl: 'article-tabs.page.html',
    styleUrls: ['article-tabs.page.scss']
})
export class ArticleTabsPage implements OnInit {

    articles: Article[];

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(
            (queryParams) => {

                // Load articles
                this.articleService.getArticles(queryParams['articles']).subscribe(
                    (pResponse) => {
                        this.articles = this.getInitialSortedArticles(queryParams['articles'], pResponse);

                        // Increment hits for the article
                        this.articles.forEach(value => {
                            this.articleService.incrementMobileHitsForArticle(value);
                        });
                    },
                    (pError) => {
                        // TODO tdit0703: Correct error handling
                        console.error(pError);
                    }
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
