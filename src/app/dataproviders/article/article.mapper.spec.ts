import {ArticleMapper} from './article.mapper';
import {ArticleJson} from './articleJson.model';
import {Article} from '../../core/domain/article.model';
import {DateUtils} from '../../util/DateUtils';

describe('ArticleMapper', () => {

    let mapper: ArticleMapper;

    beforeEach(() => {
        mapper = new ArticleMapper();
    });

    it('should handle null values for mapTo', () => {
        expect(mapper.mapTo(null)).toBe(null);
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: ArticleJson = {
            id: '1',
            titel: 'Article title',
            erstellungsdatum: '1550412574000',
            ersteller: 'tdittmann',
            kategorie: 'soccer',
            categoryColor: '#fff',
            text: 'Hello World',
            hits: '10'
        };

        const expected: Article = new Article();
        expected.id = '1';
        expected.title = 'Article title';
        expected.createdAt = DateUtils.ofUnixTimestampNumber(1550412574000);
        expected.createdBy = 'tdittmann';
        expected.categoryName = 'soccer';
        expected.categoryColor = '#fff';
        expected.text = 'Hello World';
        expected.hits = 10;

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

    it('should map from json to core model', () => {
        const actual: Article = new Article();
        actual.id = '1';
        actual.title = 'Article title';
        actual.createdAt = DateUtils.ofUnixTimestampNumber(1550412574000);
        actual.createdBy = 'tdittmann';
        actual.categoryName = 'soccer';
        actual.categoryColor = '#fff';
        actual.text = 'Hello World';
        actual.hits = 10;

        const expected: ArticleJson = {
            id: '1',
            titel: 'Article title',
            erstellungsdatum: '1550412574000',
            ersteller: 'tdittmann',
            kategorie: 'soccer',
            categoryColor: '#fff',
            text: 'Hello World',
            hits: '10'
        };

        expect(mapper.mapTo(actual)).toEqual(expected);
    });

});
