import {CardListValue} from './card-list-value.model';
import {Article} from '../article.model';

export class DynamicContent {

    /**
     * Contains the headline for the content element.
     */
    headline: string;

    /**
     * Contains the sub headline for the content element.
     */
    subHeadline: string | undefined;

    /**
     * Defines the type of the content.
     */
    type: 'card-list' | 'article';

    /**
     * Defines the value of the content.
     */
    value: CardListValue[] | Article;

    constructor(headline: string, subHeadline: string | undefined, type: 'card-list' | 'article', value: CardListValue[] | Article) {
        this.headline = headline;
        this.subHeadline = subHeadline;
        this.type = type;
        this.value = value;
    }
}
