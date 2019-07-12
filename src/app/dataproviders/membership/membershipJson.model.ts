import {ArticleJson} from '../article/articleJson.model';
import {MembershipCostsJson} from './membershipCostsJson.model';

export interface MembershipJson {

    article: ArticleJson;
    costs: MembershipCostsJson[];
    divisioncosts: MembershipCostsJson[];

}
