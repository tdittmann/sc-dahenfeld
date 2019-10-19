import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MembershipService} from '../../../dataproviders/membership/membership.service';
import {Membership} from '../../../core/domain/membership.model';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';

@Component({
    templateUrl: 'membership.page.html',
    styleUrls: ['membership.page.scss'],
    // TODO tdit0703: CSS nach innen ziehen & table-display-block als Directive?
    encapsulation: ViewEncapsulation.None
})
export class MembershipPage implements OnInit {

    membership: Membership;

    constructor(private membershipService: MembershipService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        this.membershipService.loadMembership()
            .subscribe(
                (membership) => {
                    this.membership = membership;

                    this.loadingService.hideLoading();
                },
                (error) => this.errorService.showError(error)
            );
    }

}
