import {Component, Input} from '@angular/core';
import {Article} from '../../../core/domain/article.model';

@Component({
    selector: 'article-detail',
    templateUrl: 'article-detail.component.html',
    styleUrls: ['article-detail.component.scss']
})
export class ArticleDetailComponent {

    @Input()
    article: Article;

    @Input()
    showOnlyTitle: boolean;

}
