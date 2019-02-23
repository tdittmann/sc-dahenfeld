import {Mapper} from '../../core/base/mapper';
import {ArticleJson} from './articleJson.model';
import {Article} from '../../core/domain/article.model';
import {MomentWrapper} from '../../util/MomentWrapper';

export class ArticleMapper extends Mapper<ArticleJson, Article> {

    mapFrom(param: ArticleJson): Article {
        if (!param) {
            return null;
        }

        const article: Article = new Article();
        article.id = param.id;
        article.title = param.titel;
        article.createdAt = MomentWrapper.ofUnixTimestampString(param.erstellungsdatum);
        article.createdBy = param.ersteller;
        article.categoryName = param.kategorie;
        article.text = param.text;
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
            text: param.text
        };
    }

}
