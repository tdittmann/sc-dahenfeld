import { DynamicContentMapper } from './dynamic-content.mapper';
import { DynamicContentJson } from './dynamic-content-json.model';
import { DynamicContent } from '../../core/domain/dynamic-content/dynamic-content.model';
import { CardListValue } from '../../core/domain/dynamic-content/card-list-value.model';
import { ArticleJson } from '../article/articleJson.model';
import { Article } from '../../core/domain/article.model';
import { DateUtils } from '../../util/DateUtils';

describe('DynamicContentMapper', () => {
  const mapper = new DynamicContentMapper();

  it('should return null if param is not given', () => {
    const actual = mapper.mapFrom(undefined);

    expect(actual).toEqual(null);
  });

  it('should map an card list type without values', () => {
    const json: DynamicContentJson = {
      headline: 'Headline',
      subHeadline: 'Subheadline',
      type: 'card-list',
      value: undefined,
    };

    const actual = mapper.mapFrom(json);

    const expected = new DynamicContent('Headline', 'Subheadline', 'card-list', []);
    expect(actual).toEqual(expected);
  });

  it('should map an card list type', () => {
    const json: DynamicContentJson = {
      headline: 'Headline',
      subHeadline: 'Subheadline',
      type: 'card-list',
      value: [
        {
          text1: 'Hello',
          text2: 'World',
          icon: 'icon-outline',
          image: 'test.jpg',
        },
      ],
    };

    const actual = mapper.mapFrom(json);

    const expected = new DynamicContent('Headline', 'Subheadline', 'card-list', [
      new CardListValue('Hello', 'World', 'test.jpg', 'icon-outline'),
    ]);
    expect(actual).toEqual(expected);
  });

  it('should map an article type', () => {
    const articleJson: ArticleJson = {
      id: '1',
      titel: 'Article title',
      erstellungsdatum: '1550412574000',
      ersteller: 'tdittmann',
      kategorie: 'soccer',
      categoryColor: '#fff',
      text: 'Hello World',
      hits: '10',
    };

    const json: DynamicContentJson = {
      headline: 'Article 1',
      subHeadline: 'Article 2',
      type: 'article',
      value: articleJson,
    };

    const actual = mapper.mapFrom(json);

    const expectedArticle = new Article();
    expectedArticle.id = '1';
    expectedArticle.title = 'Article title';
    expectedArticle.createdAt = DateUtils.ofUnixTimestampNumber(1550412574000);
    expectedArticle.createdBy = 'tdittmann';
    expectedArticle.categoryName = 'soccer';
    expectedArticle.categoryColor = '#fff';
    expectedArticle.text = 'Hello World';
    expectedArticle.hits = 10;
    const expected = new DynamicContent('Article 1', 'Article 2', 'article', expectedArticle);
    expect(actual).toEqual(expected);
  });
});
