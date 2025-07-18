import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../../../core/domain/feedback.model';
import { Browser } from '@capacitor/browser';
import { FeedbackService } from '../../../dataproviders/feedback/feedback.service';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';

@Component({
  templateUrl: 'feedback.page.html',
  imports: [PageHeaderComponent, PageStateComponent, IonicModule],
})
export class FeedbackPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly feedbackService = inject(FeedbackService);

  heading: string = 'Feedback';
  feedback: Feedback;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.feedbackService.loadFeedback().subscribe({
      next: (feedback) => {
        this.feedback = feedback;
        this.isLoading = false;
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
      },
    });
  }

  navigateToExternalUrl(url: string): void {
    Browser.open({ url });
  }
}
