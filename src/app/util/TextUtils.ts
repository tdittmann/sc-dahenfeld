export class TextUtils {

    public static removeAllHtmlTags(pHtmlText: string): string {
        if (this.isNotBlank(pHtmlText)) {
            return pHtmlText.replace(/<(.|\n)*?>/g, '');
        }
        return '';
    }

    public static truncateText(pText: string, pLength: number): string {
        if (this.isBlank(pText)) {
            return '';
        }
        return (pText.length > pLength)
            ? pText.substring(0, pLength - 1) + '&hellip;'
            : pText;
    }

    public static removeFirstImageFromText(pHtmlText: string): string {
        if (this.isBlank(pHtmlText)) {
            return '';
        }
        return pHtmlText.replace(/<img[^>]*>/, '');
    }

    public static getFirstImage(pHtmlText: string): string {
        return this.getFirstImageFromText(pHtmlText);
    }

    public static getFirstImageAsBackgroundUrl(pHtmlText: string): string {
        const firstImage: string = this.getFirstImageFromText(pHtmlText);
        if (this.isBlank(firstImage)) {
            return '';
        }
        return this.getAsBackgroundUrl(firstImage);
    }

    public static isBlank(text: string): boolean {
        return !this.isNotBlank(text);
    }

    public static isNotBlank(text: string): boolean {
        return text !== '' && text !== null && text !== undefined;
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
