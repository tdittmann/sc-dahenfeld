import { ArticleJson } from '../article/articleJson.model';

export interface DynamicContentJson {
  /**
   * Contains the headline for the content element.
   */
  headline: string;

  /**
   * Contains the sub headline for the content element.
   */
  subHeadline: string | undefined;

  /**
   * Defines the type of the content.
   */
  type: 'card-list' | 'article';

  /**
   * Defines the value of the content.
   */
  value: CardListValueJson[] | ArticleJson;
}

export interface CardListValueJson {
  text1: string;
  text2: string | undefined;
  image: string | undefined;
  icon: string | undefined;
}
