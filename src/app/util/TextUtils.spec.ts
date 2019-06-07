import {TextUtils} from './TextUtils';

describe('TextUtils', function () {

    it('should remove nothing from text if no image is present', function () {
        expect(TextUtils.removeFirstImageFromText('<div>Hello World</div>'))
            .toBe('<div>Hello World</div>');
    });

    it('should remove first image from text if image is present', function () {
        expect(TextUtils.removeFirstImageFromText('<div><img /></div>'))
            .toBe('<div></div>');
    });

    it('should remove first image from text if two images are present', function () {
        expect(TextUtils.removeFirstImageFromText('<div><img /><img /></div>'))
            .toBe('<div><img /></div>');
    });

    it('should return nothing for first image if no image is present ', function () {
        expect(TextUtils.getFirstImage('<div>Hello World</div>'))
            .toBe('');
    });

    it('should return first image if one image is present ', function () {
        const actual = '<div><img src="http://test.com/hello-image.png" /></div>';
        expect(TextUtils.getFirstImage(actual))
            .toBe('http://test.com/hello-image.png');
    });

    it('should return first image if two image is present ', function () {
        const actual = '<img src = "http://test.com/hello-image.png" /><img src = "http://test.com/hello-second-image.png" />';
        expect(TextUtils.getFirstImage(actual))
            .toBe('http://test.com/hello-image.png');
    });

    it('should return nothing for background url if no image is present', function () {
        expect(TextUtils.getFirstImageAsBackgroundUrl('<div></div>'))
            .toBe('');
    });

    it('should return first image with background url if one image is present', function () {
        expect(TextUtils.getFirstImageAsBackgroundUrl('<img src="http://test.com/image.png" />'))
            .toBe('url(\'http://test.com/image.png\')');
    });

    it('should return first image with background url if two images are present', function () {
        const actual = '<img src = "http://test.com/hello-image.png" /><img src = "http://test.com/hello-second-image.png" />';
        expect(TextUtils.getFirstImageAsBackgroundUrl(actual))
            .toBe('url(\'http://test.com/hello-image.png\')');
    });

    it('should return empty string if null is overgiven', function () {
        expect(TextUtils.removeAllHtmlTags(null)).toBe('');
    });

    it('should return text if does not contain html tags', function () {
        expect(TextUtils.removeAllHtmlTags('Some text')).toBe('Some text');
    });

    it('should return text without html tags', function () {
        expect(TextUtils.removeAllHtmlTags('<p>Some text</p>')).toBe('Some text');
    });

    it('should return an empty string if text is not present', function () {
        expect(TextUtils.truncateText('', 10)).toBe('');
    });

    it('should return a complete string if text is short', function () {
        expect(TextUtils.truncateText('Some random text', 20)).toBe('Some random text');
    });

    it('should return shortened string if text is long', function () {
        expect(TextUtils.truncateText('Some random text', 10)).toBe('Some rand&hellip;');
    });

});
