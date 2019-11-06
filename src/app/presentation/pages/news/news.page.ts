import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';

@Component({
    templateUrl: 'news.page.html',
    styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {

    articles: Article[] = [];
    sliderArticles: Article[] = [];

    isLoading = true;
    isError = false;

    constructor(private articleService: ArticleService) {

    }

    ngOnInit(): void {
        this.articleService.getAllArticles()
            .subscribe(
                (pArticles) => {
                    this.articles = pArticles;

                    // The first three articles should be shown as slide
                    for (let i = 0; i < 3; i++) {
                        this.sliderArticles.push(this.articles.shift());
                    }

                    this.isLoading = false;
                },
                (pError) => {
                    this.isError = true;
                    console.error(pError);
                }
            );
    }

}
