import { MembershipCostsJson, MembershipJson } from './membershipJson.model';
import { Membership } from '../../core/domain/membership.model';
import { ArticleMapper } from '../article/article.mapper';
import { MembershipCosts } from '../../core/domain/MembershipCosts.model';

export class MembershipMapper {
  private readonly articleMapper: ArticleMapper = new ArticleMapper();

  mapFrom(param: MembershipJson): Membership {
    if (!param) {
      return null;
    }

    const membership: Membership = new Membership();
    membership.article = this.articleMapper.mapFrom(param.article);
    membership.costs = this.mapCostsFrom(param.costs);
    membership.divisionCosts = this.mapCostsFrom(param.divisioncosts);
    return membership;
  }

  mapCostsFrom(param: MembershipCostsJson[]): MembershipCosts[] {
    if (!param) {
      return [];
    }

    return param.map((value) => {
      const membershipCosts: MembershipCosts = new MembershipCosts();
      membershipCosts.title = value.title;
      membershipCosts.costs = value.amount;
      membershipCosts.hint = value.hint;
      return membershipCosts;
    });
  }
}
