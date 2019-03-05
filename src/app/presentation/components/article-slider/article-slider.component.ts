import {Component, Input} from '@angular/core';
import {Article} from '../../../core/domain/article.model';

@Component({
    selector: 'article-slider',
    templateUrl: 'article-slider.component.html',
    styleUrls: ['article-slider.component.scss']
})
export class ArticleSliderComponent {

    @Input() articles: Article[] = [];

    public sliderOptions = {
        autoplay: {
            delay: 5_000,
        }
    };

}
