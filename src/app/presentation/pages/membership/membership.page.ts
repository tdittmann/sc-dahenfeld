import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MembershipService} from '../../../dataproviders/membership/membership.service';
import {Membership} from '../../../core/domain/membership.model';

@Component({
    templateUrl: 'membership.page.html',
    styleUrls: ['membership.page.scss'],
    // TODO tdit0703: CSS nach innen ziehen & table-display-block als Directive?
    encapsulation: ViewEncapsulation.None
})
export class MembershipPage implements OnInit {

    membership: Membership;

    constructor(private membershipService: MembershipService) {

    }

    ngOnInit(): void {
        this.membershipService.loadMembership()
            .subscribe(
                (response: Membership) => {
                    this.membership = response;
                },
                (error) => {
                    // TODO tdit0703: error handling
                    console.error(error);
                }
            )
        ;
    }

}
