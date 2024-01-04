import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../../../core/domain/feedback.model';
import { Browser } from '@capacitor/browser';
import { FeedbackService } from '../../../dataproviders/feedback/feedback.service';

@Component({
  templateUrl: 'feedback.page.html',
})
export class FeedbackPage implements OnInit {
  heading: string = 'Feedback';
  feedback: Feedback;

  isLoading = true;
  isError = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService,
  ) {}

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
