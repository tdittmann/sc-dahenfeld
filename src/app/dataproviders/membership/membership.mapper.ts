import {MembershipCostsJson, MembershipJson} from './membershipJson.model';
import {Membership} from '../../core/domain/membership.model';
import {ArticleMapper} from '../article/article.mapper';
import {MembershipCosts} from '../../core/domain/MembershipCosts.model';

export class MembershipMapper {

    private articleMapper: ArticleMapper = new ArticleMapper();

    mapFrom(param: MembershipJson): Membership {
        if (!param) {
            return null;
        }

        const membership: Membership = new Membership();
        membership.article = this.articleMapper.mapFrom(param.article);
        membership.costs = param.costs.map(this.mapCostsFrom);
        membership.divisionCosts = param.divisioncosts.map(this.mapCostsFrom);
        return membership;
    }

    mapCostsFrom(param: MembershipCostsJson): MembershipCosts {
        if (!param) {
            return null;
        }

        const membershipCosts: MembershipCosts = new MembershipCosts();
        membershipCosts.title = param.title;
        membershipCosts.costs = param.amount;
        membershipCosts.hint = param.hint;
        return membershipCosts;
    }

}
