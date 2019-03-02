import {ImageUtil} from './ImageUtil';

describe('ImageUtil', function () {

    it('should remove nothing from text if no image is present', function () {
        expect(ImageUtil.removeFirstImageFromText('<div>Hello World</div>'))
            .toBe('<div>Hello World</div>');
    });

    it('should remove first image from text if image is present', function () {
        expect(ImageUtil.removeFirstImageFromText('<div><img /></div>'))
            .toBe('<div></div>');
    });

    it('should remove first image from text if two images are present', function () {
        expect(ImageUtil.removeFirstImageFromText('<div><img /><img /></div>'))
            .toBe('<div><img /></div>');
    });

    it('should return nothing for first image if no image is present ', function () {
        expect(ImageUtil.getFirstImage('<div>Hello World</div>'))
            .toBe('');
    });

    it('should return first image if one image is present ', function () {
        const actual = '<div><img src="http://test.com/hello-image.png" /></div>';
        expect(ImageUtil.getFirstImage(actual))
            .toBe('http://test.com/hello-image.png');
    });

    it('should return first image if two image is present ', function () {
        const actual = '<img src = "http://test.com/hello-image.png" /><img src = "http://test.com/hello-second-image.png" />';
        expect(ImageUtil.getFirstImage(actual))
            .toBe('http://test.com/hello-image.png');
    });

    it('should return nothing for background url if no image is present', function () {
        expect(ImageUtil.getFirstImageAsBackgroundUrl('<div></div>'))
            .toBe('');
    });

    it('should return first image with background url if one image is present', function () {
        expect(ImageUtil.getFirstImageAsBackgroundUrl('<img src="http://test.com/image.png" />'))
            .toBe('url(\'http://test.com/image.png\')');
    });

    it('should return first image with background url if two images are present', function () {
        const actual = '<img src = "http://test.com/hello-image.png" /><img src = "http://test.com/hello-second-image.png" />';
        expect(ImageUtil.getFirstImageAsBackgroundUrl(actual))
            .toBe('url(\'http://test.com/hello-image.png\')');
    });

});
