import {Component, Input} from '@angular/core';
import {Article} from '../../../core/domain/article.model';

@Component({
    selector: 'article-card',
    templateUrl: 'article-card.component.html',
    styleUrls: ['article-card.component.scss']
})
export class ArticleCardComponent {

    @Input() type: 'large' | 'small' = 'small';
    @Input() article: Article;

}
