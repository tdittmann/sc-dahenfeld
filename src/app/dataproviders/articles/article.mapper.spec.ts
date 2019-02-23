import {ArticleMapper} from './article.mapper';
import {ArticleJson} from './articleJson.model';
import {Article} from '../../core/domain/article.model';
import {MomentWrapper} from '../../util/MomentWrapper';

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
            text: 'Hello World'
        };

        const expected: Article = new Article();
        expected.id = '1';
        expected.title = 'Article title';
        expected.createdAt = MomentWrapper.ofUnixTimestampNumber(1550412574000);
        expected.createdBy = 'tdittmann';
        expected.categoryName = 'soccer';
        expected.text = 'Hello World';

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

    it('should map from json to core model', () => {
        const actual: Article = new Article();
        actual.id = '1';
        actual.title = 'Article title';
        actual.createdAt = MomentWrapper.ofUnixTimestampNumber(1550412574000);
        actual.createdBy = 'tdittmann';
        actual.categoryName = 'soccer';
        actual.text = 'Hello World';

        const expected: ArticleJson = {
            id: '1',
            titel: 'Article title',
            erstellungsdatum: '1550412574000',
            ersteller: 'tdittmann',
            kategorie: 'soccer',
            text: 'Hello World'
        };

        expect(mapper.mapTo(actual)).toEqual(expected);
    });

});
