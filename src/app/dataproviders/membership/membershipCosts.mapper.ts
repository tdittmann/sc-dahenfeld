import {MembershipCosts} from '../../core/domain/MembershipCosts.model';
import {MembershipCostsJson} from './membershipCostsJson.model';

// TODO tdit0703: Tests
export class MembershipCostsMapper {

    mapFrom(param: MembershipCostsJson): MembershipCosts {
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
