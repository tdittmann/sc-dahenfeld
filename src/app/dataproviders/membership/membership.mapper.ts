import {MembershipJson} from './membershipJson.model';
import {Membership} from '../../core/domain/membership.model';
import {MembershipCostsMapper} from './membershipCosts.mapper';
import {ArticleMapper} from '../article/article.mapper';

// TODO tdit0703: Tests
export class MembershipMapper {

    private articleMapper: ArticleMapper = new ArticleMapper();
    private membershipCostsMapper: MembershipCostsMapper = new MembershipCostsMapper();

    mapFrom(param: MembershipJson): Membership {
        if (!param) {
            return null;
        }

        const membership: Membership = new Membership();
        membership.article = this.articleMapper.mapFrom(param.article);
        membership.costs = param.costs.map(this.membershipCostsMapper.mapFrom);
        membership.divisionCosts = param.divisioncosts.map(this.membershipCostsMapper.mapFrom);
        return membership;
    }

}
