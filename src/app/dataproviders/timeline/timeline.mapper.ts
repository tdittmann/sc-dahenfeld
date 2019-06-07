import {Mapper} from '../../core/base/mapper';
import {TimelineEntry} from '../../core/domain/timeline-entry.model';
import {Article} from '../../core/domain/article.model';

export class TimelineMapper implements Mapper<Article, TimelineEntry> {

    mapFrom(param: Article): TimelineEntry {
        if (!param) {
            return null;
        }

        const entry: TimelineEntry = new TimelineEntry();
        entry.title = param.title;
        entry.text = param.text;
        entry.articleId = param.id;
        entry.date = param.createdAt;
        return entry;
    }

    mapTo(param: TimelineEntry): Article {
        if (!param) {
            return null;
        }

        const article: Article = new Article();
        article.id = param.articleId;
        article.title = param.title;
        article.text = param.text;
        article.createdAt = param.date;
        return article;
    }

}
