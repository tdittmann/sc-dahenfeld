import { Component, Input, OnInit, inject } from '@angular/core';
import { MatchDetailService } from '../../../dataproviders/soccer/match-detail/match-detail.service';
import { MatchDetail } from '../../../core/domain/matchDetail.model';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from '../../shared/tabs/tabs/tabs.component';
import { TabComponent } from '../../shared/tabs/tab/tab.component';
import { MatchHighlightsComponent } from './match-highlights/match-highlights.component';
import { MatchInformationComponent } from './match-information/match-information.component';
import { MatchLineupComponent } from './match-lineup/match-lineup.component';
import { MatchHeadToHeadComponent } from './match-head-to-head/match-head-to-head.component';

@Component({
  templateUrl: 'match-detail.page.html',
  styleUrls: ['match-detail.page.scss'],
  imports: [
    ModalHeaderComponent,
    PageStateComponent,
    IonicModule,
    TabsComponent,
    TabComponent,
    MatchHighlightsComponent,
    MatchInformationComponent,
    MatchLineupComponent,
    MatchHeadToHeadComponent,
  ],
})
export class MatchDetailPage implements OnInit {
  private readonly matchDetailService = inject(MatchDetailService);

  @Input() matchId: number;

  activeTabUrlIdentifier = 'match-detail-tab';
  matchDetails: MatchDetail;
  pastMatches: MatchDetail[] = [];

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.loadMatch(null);
  }

  loadMatch(event) {
    this.matchDetailService.loadMatchDetails(this.matchId).subscribe({
      next: (matchDetails) => {
        this.matchDetails = matchDetails;
        this.loadPastMatches(matchDetails.matchId, matchDetails.homeTeamId, matchDetails.awayTeamId);
        this.isLoading = false;
        this.completeEvent(event);
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
        this.completeEvent(event);
      },
    });
  }

  loadPastMatches(matchId: number, teamId1: number, teamId2: number) {
    this.matchDetailService.loadPastMatches(matchId, teamId1, teamId2).subscribe({
      next: (pastMatches) => {
        this.pastMatches = pastMatches;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  completeEvent(event) {
    if (event) {
      event.target.complete();
    }
  }
}
