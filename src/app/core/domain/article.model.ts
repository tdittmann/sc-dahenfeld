import {ImageUtil} from '../../util/ImageUtil';
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

    public getFirstImage(): string {
        return ImageUtil.getFirstImage(this.text);
    }

    public getFirstImageAsBackgroundUrl(): string {
        return ImageUtil.getFirstImageAsBackgroundUrl(this.text);
    }

    public getFormattedDate(): string {
        if (!this.createdAt) {
            return '';
        }

        return this.createdAt
            .format(environment.dateFormat);
    }

}
