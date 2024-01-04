import { Article } from './article.model';
import { MembershipCosts } from './MembershipCosts.model';

export class Membership {
  article: Article;
  costs: MembershipCosts[];
  divisionCosts: MembershipCosts[];
}
