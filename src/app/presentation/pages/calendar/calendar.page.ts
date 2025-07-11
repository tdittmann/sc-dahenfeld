import { Component, OnInit, inject } from '@angular/core';
import { CalendarService } from '../../../dataproviders/calendar/calendar.service';
import { CalendarEntry } from '../../../core/domain/calendarEntry.model';
import { Moment } from 'moment';
import { ActivatedRoute } from '@angular/router';
import { MatchDetailPage } from '../match-detail/match-detail.page';
import { ModalController, IonicModule } from '@ionic/angular';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { MatchCardComponent } from '../../shared/match-card/match-card.component';
import { EventCardComponent } from '../../shared/event-card/event-card.component';

@Component({
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, MatchCardComponent, EventCardComponent],
})
export class CalendarPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly calendarService = inject(CalendarService);
  private readonly modalController = inject(ModalController);

  heading: string;
  calendarEntries: CalendarEntry[] = [];
  lastDay = null;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.loadCalendarEvents(null);
  }

  loadCalendarEvents(event) {
    this.activatedRoute.queryParams.subscribe({
      next: (queryParams) => {
        this.heading = queryParams['heading'];

        // Check which type of calendarEntry we want to display
        let calendarObservable;
        if (queryParams['matches'] === 'true' && queryParams['events'] === 'false') {
          // Only matches
          calendarObservable = this.calendarService.loadCalendarMatches();
        } else if (queryParams['matches'] === 'false' && queryParams['events'] === 'true') {
          // Only events
          calendarObservable = this.calendarService.loadCalendarEvents();
        } else {
          // Matches and events
          calendarObservable = this.calendarService.loadCalendarEntries();
        }

        calendarObservable.subscribe(
          (events) => {
            this.calendarEntries = events;
            this.isLoading = false;
            this.completeEvent(event);
          },
          (error) => {
            this.isError = false;
            console.error(error);
            this.completeEvent(event);
          },
        );
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
        this.completeEvent(event);
      },
    });
  }

  completeEvent(event) {
    if (event) {
      event.target.complete();
    }
  }

  public isDifferentDay(date: Moment): boolean {
    const isSame = date.isSame(this.lastDay, 'day');
    this.lastDay = date;
    return !isSame;
  }

  public openMatchDetail(matchId) {
    this.modalController
      .create({
        component: MatchDetailPage,
        componentProps: {
          matchId: matchId,
        },
      })
      .then((modal) => modal.present());
  }
}
