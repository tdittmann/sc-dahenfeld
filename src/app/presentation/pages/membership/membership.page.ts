import { Component, OnInit, inject } from '@angular/core';
import { MembershipService } from '../../../dataproviders/membership/membership.service';
import { Membership } from '../../../core/domain/membership.model';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailComponent } from '../../shared/article-detail/article-detail.component';
import { CostCardComponent } from './cost-card/cost-card.component';

@Component({
  templateUrl: 'membership.page.html',
  styleUrls: ['membership.page.scss'],
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, ArticleDetailComponent, CostCardComponent],
})
export class MembershipPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly membershipService = inject(MembershipService);

  heading: string;
  membership: Membership;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.membershipService.loadMembership().subscribe({
      next: (membership) => {
        this.membership = membership;

        this.isLoading = false;
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
      },
    });
  }
}
