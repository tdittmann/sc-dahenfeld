export class CardListValue {

    /**
     * Defines the first text.
     */
    text1: string;

    /**
     * Defines the second text. Can be empty.
     */
    text2: string | undefined;

    /**
     * Defines the image URL. Can be empty.
     */
    image: string | undefined;

    /**
     * Defines the icon. Can be empty.
     */
    icon: string | undefined;

    constructor(text1: string, text2: string | undefined, image: string | undefined, icon: string | undefined) {
        this.text1 = text1;
        this.text2 = text2;
        this.image = image;
        this.icon = icon;
    }
}
