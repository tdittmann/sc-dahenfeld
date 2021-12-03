import {Component, Input} from '@angular/core';
import {TextUtils} from '../../../util/TextUtils';

@Component({
    selector: 'article-card',
    templateUrl: 'article-card.component.html',
    styleUrls: ['article-card.component.scss']
})
export class ArticleCardComponent {

    @Input() image: string;
    @Input() title: string;
    @Input() subTitle: string;
    @Input() category: string;
    @Input() categoryColor: string;
    @Input() footerIcon: string;
    @Input() footerText: string;

    showImage(): boolean {
        return TextUtils.isNotBlank(this.image);
    }

    showSubTitle(): boolean {
        return TextUtils.isNotBlank(this.subTitle);
    }

    showCategory(): boolean {
        return TextUtils.isNotBlank(this.category);
    }

    showFooter(): boolean {
        return TextUtils.isNotBlank(this.footerText);
    }

    showFooterIcon(): boolean {
        return TextUtils.isNotBlank(this.footerIcon);
    }

}
