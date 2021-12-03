import {Component, OnInit} from '@angular/core';
import {MembershipService} from '../../../dataproviders/membership/membership.service';
import {Membership} from '../../../core/domain/membership.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'membership.page.html',
    styleUrls: ['membership.page.scss']
})
export class MembershipPage implements OnInit {

    heading: string;
    membership: Membership;

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private membershipService: MembershipService) {

    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.membershipService.loadMembership().subscribe({
            next: (membership) => {
                this.membership = membership;

                this.isLoading = false;
            },
            error: (error) => {
                this.isError = true;
                console.error(error);
            }
        });
    }

}
