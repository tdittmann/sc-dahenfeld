import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../core/domain/article.model';

@Component({
    templateUrl: 'article-tabs.page.html',
    styleUrls: ['article-tabs.page.scss']
})
export class ArticleTabsPage implements OnInit {

    // TODO tdit0703: Sortierung?
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
                        this.articles = pResponse;

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

}
