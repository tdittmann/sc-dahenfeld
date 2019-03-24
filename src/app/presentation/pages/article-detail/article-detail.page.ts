import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../../dataproviders/articles/article.service';
import {Article} from '../../../core/domain/article.model';

@Component({
    selector: 'article-detail',
    templateUrl: 'article-detail.page.html',
    styleUrls: ['article-detail.page.scss']
})
export class ArticleDetailPage implements OnInit {

    article: Article;

    constructor(private articleService: ArticleService,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.articleService.getArticle(id).subscribe(
                (pResponse) => {
                    this.article = pResponse;
                },
                (pError) => {
                    // TODO tdit0703: Correct error handling
                    console.error(pError);
                }
            );
        });
    }

}
