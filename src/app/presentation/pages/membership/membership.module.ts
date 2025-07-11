import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MembershipPage } from './membership.page';
import { MembershipService } from '../../../dataproviders/membership/membership.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [MembershipService],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MembershipPage,
      },
    ]),
    MembershipPage,
  ],
})
export class MembershipPageModule {}
