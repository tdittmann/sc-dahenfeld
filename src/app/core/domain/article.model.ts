import {TextUtils} from '../../util/TextUtils';
import {Moment} from 'moment';
import {environment} from '../../../environments/environment';

export class Article {

    id: string;
    title: string;
    createdAt: Moment;
    createdBy: string;
    categoryName: string;
    categoryColor: string;
    text: string;
    hits: number;

    public getTextWithoutFirstImage(): string {
        return TextUtils.removeFirstImageFromText(this.text);
    }

    public getFirstImage(): string {
        return TextUtils.getFirstImage(this.text);
    }

    public getFirstImageAsBackgroundUrl(): string {
        return TextUtils.getFirstImageAsBackgroundUrl(this.text);
    }

    public getFormattedDate(): string {
        if (!this.createdAt) {
            return '';
        }

        return this.createdAt
            .format(environment.dateFormat);
    }

}
