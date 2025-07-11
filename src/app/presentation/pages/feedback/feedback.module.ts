import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FeedbackPage } from './feedback.page';
import { FeedbackService } from '../../../dataproviders/feedback/feedback.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [FeedbackService],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeedbackPage,
      },
    ]),
    FeedbackPage,
  ],
})
export class FeedbackPageModule {}
