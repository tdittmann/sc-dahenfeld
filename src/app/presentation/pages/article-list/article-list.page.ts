import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/articles/article.service';
import {Article} from '../../../core/domain/article.model';

@Component({
    selector: 'article-list',
    templateUrl: 'article-list.page.html',
    styleUrls: ['article-list.page.scss']
})
export class ArticleListPage implements OnInit {

    /**
     * Default is zero, so we get all articles
     */
    categoryId = 0;
    articles: Article[] = [];

    constructor(private articleService: ArticleService) {

    }

    ngOnInit(): void {
        this.articleService.getAllArticles(this.categoryId)
            .subscribe(
                pArticles => {
                    this.articles = pArticles;
                },
                pError => {
                    console.error(pError);
                }
            );
    }

}
