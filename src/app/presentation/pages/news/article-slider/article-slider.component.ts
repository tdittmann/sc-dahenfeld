import {Component, Input} from '@angular/core';
import {Article} from '../../../../core/domain/article.model';
import {Router} from '@angular/router';

@Component({
    selector: 'article-slider',
    templateUrl: 'article-slider.component.html',
    styleUrls: ['article-slider.component.scss']
})
export class ArticleSliderComponent {

    @Input() articles: Article[] = [];

    constructor(private router: Router) {

    }

    public sliderOptions = {
        autoplay: {
            delay: 50_000,
        }
    };

    public goToArticleDetail(article: Article) {
        this.router.navigate([article.getArticleLink()]);
    }

}
