import * as underscore from 'node_modules/underscore.string';

// TODO tdit0703: Tests
export class ImageUtil {

    public static removeFirstImageFromText(pHtmlText: string): string {
        return pHtmlText.replace(/<img[^>]*>/, '');
    }

    public static getFirstImage(pHtmlText: string): string {
        return this.getFirstImageFromText(pHtmlText);
    }

    public static getFirstImageAsBackgroundUrl(pHtmlText: string): string {
        const firstImage: string = this.getFirstImageFromText(pHtmlText);
        if (!underscore.isBlank(firstImage)) {
            return 'url(\'' + firstImage + '\')';
        }
        return '';
    }

    private static getFirstImageFromText(pHtmlText: string): string {
        // Get first image in content
        const div = document.createElement('div');
        div.innerHTML = pHtmlText;

        if (div.getElementsByTagName('img').length > 0) {
            return div.getElementsByTagName('img')[0].src;
        }

        return '';
    }

}
