import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {Router} from '@angular/router';

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
    sliderArticles: Article[] = [];

    constructor(private articleService: ArticleService,
                private router: Router) {

    }

    ngOnInit(): void {
        this.articleService.getAllArticles(this.categoryId)
            .subscribe(
                (pArticles) => {
                    this.articles = pArticles;

                    // The first three articles should be shown as slide
                    for (let i = 0; i < 3; i++) {
                        this.sliderArticles.push(this.articles.shift());
                    }
                },
                (pError) => {
                    // TODO tdit0703: Correct error handling
                    console.error(pError);
                }
            );
    }

    public goToArticleDetail(id: string) {
        this.router.navigate(['/article', id]);
    }

}
