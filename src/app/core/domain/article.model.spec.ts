import {Article} from './article.model';
import * as moment from 'moment';

describe('Article', () => {

    it('should return an empty string if text is not present', function () {
        const article: Article = new Article();

        expect(article.getFirstImage()).toBe('');
    });

    it('should return an empty string if no image is in text', function () {
        const article: Article = new Article();
        article.text = '<div class="test-class">Hello Test-World</div>';

        expect(article.getFirstImage()).toBe('');
    });

    it('should return an image url if image is in text', function () {
        const article: Article = new Article();
        article.text = '<div class="test-class"><img src="/hello/world/image.jpg" alt="Wonderful image" /></div>';

        expect(article.getFirstImage()).toBe('http://localhost:9876/hello/world/image.jpg');
    });

    it('should return first image url if multiple images are in text', function () {
        const article: Article = new Article();
        article.text = '<div class="test-class">' +
            '<img src="/hello/world/image.jpg" alt="Wonderful image" />' +
            '<img src="/hello/world/fake-image.jpg" alt="Wonderful fake image" />' +
            '</div>';

        expect(article.getFirstImage()).toBe('http://localhost:9876/hello/world/image.jpg');
    });


    it('should return an empty string if text is not present', function () {
        const article: Article = new Article();

        expect(article.getFirstImageAsBackgroundUrl()).toBe('');
    });

    it('should return an empty string if no image is in text', function () {
        const article: Article = new Article();
        article.text = '<div class="test-class">Hello Test-World</div>';

        expect(article.getFirstImageAsBackgroundUrl()).toBe('');
    });

    it('should return an image url if image is in text', function () {
        const article: Article = new Article();
        article.text = '<div class="test-class"><img src="/hello/world/image.jpg" alt="Wonderful image" /></div>';

        expect(article.getFirstImageAsBackgroundUrl()).toBe('url(\'http://localhost:9876/hello/world/image.jpg\')');
    });

    it('should return first image url if multiple images are in text', function () {
        const article: Article = new Article();
        article.text = '<div class="test-class">' +
            '<img src="/hello/world/image.jpg" alt="Wonderful image" />' +
            '<img src="/hello/world/fake-image.jpg" alt="Wonderful fake image" />' +
            '</div>';

        expect(article.getFirstImageAsBackgroundUrl()).toBe('url(\'http://localhost:9876/hello/world/image.jpg\')');
    });

    it('should return an empty string if no date is present', function () {
        const article: Article = new Article();

        expect(article.getFormattedDate()).toBe('');
    });

    it('should return an formatted string if date is present', function () {
        const article: Article = new Article();
        article.createdAt = moment('1995-12-25');

        expect(article.getFormattedDate()).toBe('25. December 1995');
    });

});
