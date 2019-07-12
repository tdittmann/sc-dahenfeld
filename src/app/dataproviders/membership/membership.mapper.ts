import {Mapper} from '../../core/base/mapper';
import {MembershipJson} from './membershipJson.model';
import {Membership} from '../../core/domain/membership.model';
import {MembershipCostsMapper} from './membershipCosts.mapper';
import {ArticleMapper} from '../article/article.mapper';

// TODO tdit0703: Tests
export class MembershipMapper implements Mapper<MembershipJson, Membership> {

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

    mapTo(param: Membership): MembershipJson {
        if (!param) {
            return null;
        }

        return {
            article: this.articleMapper.mapTo(param.article),
            costs: param.costs.map(this.membershipCostsMapper.mapTo),
            divisioncosts: param.divisionCosts.map(this.membershipCostsMapper.mapTo)
        };
    }

}
