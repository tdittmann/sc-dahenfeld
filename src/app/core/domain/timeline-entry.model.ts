import {Moment} from 'moment';
import {TextUtils} from '../../util/TextUtils';

export class TimelineEntry {

    title: string;
    text: string;
    date: Moment;
    articleId: string;

    public getTruncatedText(): string {
        return TextUtils.truncateText(TextUtils.removeAllHtmlTags(this.text), 150);
    }

    public getArticleLink(): string {
        return '/article/' + this.articleId;
    }

}
