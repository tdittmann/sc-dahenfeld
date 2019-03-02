import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/articles/article.service';
import {Article} from '../../../core/domain/article.model';

@Component({
    selector: 'news',
    templateUrl: 'news.page.html',
    styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {

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
