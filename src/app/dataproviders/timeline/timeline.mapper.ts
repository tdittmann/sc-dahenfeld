import {TimelineEntry} from '../../core/domain/timeline-entry.model';
import {Article} from '../../core/domain/article.model';

export class TimelineMapper {

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

}
