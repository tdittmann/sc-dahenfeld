import {ArticleJson} from './articleJson.model';
import {Article} from '../../core/domain/article.model';
import {DateUtils} from '../../util/DateUtils';

export class ArticleMapper {

    mapFrom(param: ArticleJson): Article {
        if (!param) {
            return null;
        }

        const article: Article = new Article();
        article.id = param.id;
        article.title = param.titel;
        article.createdAt = DateUtils.ofUnixTimestampString(param.erstellungsdatum);
        article.createdBy = param.ersteller;
        article.categoryName = param.kategorie;
        article.categoryColor = param.categoryColor;
        article.text = param.text;
        article.hits = parseInt(param.hits, 10);
        return article;
    }

    mapTo(param: Article): ArticleJson {
        if (!param) {
            return null;
        }

        return {
            id: param.id,
            titel: param.title,
            erstellungsdatum: param.createdAt.valueOf().toString(),
            ersteller: param.createdBy,
            kategorie: param.categoryName,
            categoryColor: param.categoryColor,
            text: param.text,
            hits: param.hits.toString()
        };
    }

}
