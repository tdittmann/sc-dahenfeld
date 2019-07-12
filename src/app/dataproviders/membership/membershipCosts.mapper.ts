import {Mapper} from '../../core/base/mapper';
import {MembershipCosts} from '../../core/domain/MembershipCosts.model';
import {MembershipCostsJson} from './membershipCostsJson.model';

// TODO tdit0703: Tests
export class MembershipCostsMapper implements Mapper<MembershipCostsJson, MembershipCosts> {

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

    mapTo(param: MembershipCosts): MembershipCostsJson {
        if (!param) {
            return null;
        }

        return {
            title: param.title,
            amount: param.costs,
            hint: param.hint
        };
    }


}
