import {Component, OnInit} from '@angular/core';
import {MembershipService} from '../../../dataproviders/membership/membership.service';
import {Membership} from '../../../core/domain/membership.model';

@Component({
    templateUrl: 'membership.page.html',
    styleUrls: ['membership.page.scss']
})
export class MembershipPage implements OnInit {

    membership: Membership;

    isLoading = true;
    isError = false;

    constructor(private membershipService: MembershipService) {

    }

    ngOnInit(): void {
        this.membershipService.loadMembership()
            .subscribe(
                (membership) => {
                    this.membership = membership;

                    this.isLoading = false;
                },
                (error) => {
                    this.isError = true;
                    console.error(error);
                }
            );
    }

}
