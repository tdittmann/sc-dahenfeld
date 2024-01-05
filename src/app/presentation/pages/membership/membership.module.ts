import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MembershipPage } from './membership.page';
import { MembershipService } from '../../../dataproviders/membership/membership.service';
import { ArticleDetailModule } from '../../shared/article-detail/article-detail.module';
import { CostCardModule } from './cost-card/cost-card.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [MembershipService],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    ArticleDetailModule,
    CostCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: MembershipPage,
      },
    ]),
  ],
  declarations: [MembershipPage],
})
export class MembershipPageModule {}
