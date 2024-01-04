import { ArticleJson } from '../article/articleJson.model';

export interface MembershipJson {
  article: ArticleJson;
  costs: MembershipCostsJson[];
  divisioncosts: MembershipCostsJson[];
}

export interface MembershipCostsJson {
  title: string;
  amount: string;
  hint: string;
}
