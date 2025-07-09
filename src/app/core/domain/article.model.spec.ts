import { Article } from './article.model';
import moment from "moment";

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
    article.text =
      '<div class="test-class">' +
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

    expect(article.getFirstImageAsBackgroundUrl()).toBe("url('http://localhost:9876/hello/world/image.jpg')");
  });

  it('should return first image url if multiple images are in text', function () {
    const article: Article = new Article();
    article.text =
      '<div class="test-class">' +
      '<img src="/hello/world/image.jpg" alt="Wonderful image" />' +
      '<img src="/hello/world/fake-image.jpg" alt="Wonderful fake image" />' +
      '</div>';

    expect(article.getFirstImageAsBackgroundUrl()).toBe("url('http://localhost:9876/hello/world/image.jpg')");
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

  it('should return an empty string if no text is set', function () {
    const article: Article = new Article();

    expect(article.getTextWithoutFirstImage()).toBe('');
  });

  it('should return full text if one is set', function () {
    const article: Article = new Article();
    article.text = 'Some content';

    expect(article.getTextWithoutFirstImage()).toBe('Some content');
  });

  it('should return text without first image if one is set', function () {
    const article: Article = new Article();
    article.text = '<img src="test.png">Some content';

    expect(article.getTextWithoutFirstImage()).toBe('Some content');
  });

  it('should return text without first image if more than one image is set', function () {
    const article: Article = new Article();
    article.text = '<img src="test1.png"><img src="test2.png">Some content';

    expect(article.getTextWithoutFirstImage()).toBe('<img src="test2.png">Some content');
  });

  it('should return valid article link', function () {
    const article: Article = new Article();
    article.id = '9';

    expect(article.getArticleLink()).toBe('/article/9');
  });
});
