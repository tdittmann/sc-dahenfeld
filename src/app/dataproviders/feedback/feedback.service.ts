import { Injectable, inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Feedback } from '../../core/domain/feedback.model';
import { FeedbackJson } from './feedbackJson.model';
import { FeedbackMapper } from './feedbackMapper';

@Injectable()
export class FeedbackService {
  private readonly httpService = inject(HttpService);

  private readonly mapper: FeedbackMapper = new FeedbackMapper();

  loadFeedback(): Observable<Feedback> {
    return this.httpService.get<FeedbackJson>(environment.backendUrl + 'feedback').pipe(map((value) => this.mapper.mapFrom(value)));
  }
}
