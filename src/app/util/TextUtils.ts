import * as underscore from 'node_modules/underscore.string';

export class TextUtils {

    public static removeAllHtmlTags(pHtmlText: string): string {
        if (!underscore.isBlank(pHtmlText)) {
            return pHtmlText.replace(/<(.|\n)*?>/g, '');
        }
        return '';
    }

    public static truncateText(pText: string, pLength: number): string {
        if (underscore.isBlank(pText)) {
            return '';
        }
        return (pText.length > pLength)
            ? pText.substr(0, pLength - 1) + '&hellip;'
            : pText;
    }

    public static removeFirstImageFromText(pHtmlText: string): string {
        if (!underscore.isBlank(pHtmlText)) {
            return pHtmlText.replace(/<img[^>]*>/, '');
        }
        return '';
    }

    public static getFirstImage(pHtmlText: string): string {
        return this.getFirstImageFromText(pHtmlText);
    }

    public static getFirstImageAsBackgroundUrl(pHtmlText: string): string {
        const firstImage: string = this.getFirstImageFromText(pHtmlText);
        if (!underscore.isBlank(firstImage)) {
            return this.getAsBackgroundUrl(firstImage);
        }
        return '';
    }

    public static getAsBackgroundUrl(pText: string): string {
        return 'url(\'' + pText + '\')';
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
