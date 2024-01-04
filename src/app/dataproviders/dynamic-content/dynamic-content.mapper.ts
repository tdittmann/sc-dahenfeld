import { CardListValueJson, DynamicContentJson } from './dynamic-content-json.model';
import { DynamicContent } from '../../core/domain/dynamic-content/dynamic-content.model';
import { Article } from '../../core/domain/article.model';
import { CardListValue } from '../../core/domain/dynamic-content/card-list-value.model';
import { ArticleMapper } from '../article/article.mapper';
import { ArticleJson } from '../article/articleJson.model';

export class DynamicContentMapper {
  private _articleMapper = new ArticleMapper();

  mapFrom(param: DynamicContentJson): DynamicContent {
    if (!param) {
      return null;
    }

    let value: CardListValue[] | Article;
    switch (param.type) {
      case 'card-list':
        value = this.mapCardListFrom(<CardListValueJson[]>param.value);
        break;
      case 'article':
        value = this._articleMapper.mapFrom(<ArticleJson>param.value);
        break;
      default:
        value = [];
    }

    return new DynamicContent(param.headline, param.subHeadline, param.type, value);
  }

  private mapCardListFrom(param: CardListValueJson[]): CardListValue[] {
    if (!param) {
      return [];
    }

    return param.map((value) => new CardListValue(value.text1, value.text2, value.image, value.icon));
  }
}
