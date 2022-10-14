import {Component, HostListener, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {Article} from '../../../core/domain/article.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: 'news.page.html',
    styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {

    numberOfFeaturedArticles = 1;
    heading: string;
    articles: Article[] = [];

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private articleService: ArticleService) {

    }

    ngOnInit(): void {

        this.onResize();

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.articleService.getAllArticles()
            .subscribe({
                next: (pArticles) => {
                    this.articles = pArticles;
                    this.isLoading = false;
                },
                error: (pError) => {
                    this.isError = true;
                    console.error(pError);
                }
            });
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        if (window.innerWidth >= 768 && window.innerWidth < 992) {
            this.numberOfFeaturedArticles = 2;
        } else if (window.innerWidth >= 992) {
            this.numberOfFeaturedArticles = 3;
        } else {
            this.numberOfFeaturedArticles = 1;
        }
    }

}
