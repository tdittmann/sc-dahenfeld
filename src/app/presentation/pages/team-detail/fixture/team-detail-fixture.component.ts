import { Component, Input, OnInit, inject } from '@angular/core';
import { MatchService } from '../../../../dataproviders/soccer/matches/match.service';
import { Match } from '../../../../core/domain/match.model';
import { MatchDetailPage } from '../../match-detail/match-detail.page';
import { ModalController } from '@ionic/angular';
import { PageStateComponent } from '../../../shared/page-state/page-state.component';
import { MatchCardComponent } from '../../../shared/match-card/match-card.component';

@Component({
  selector: 'app-team-detail-fixture',
  templateUrl: 'team-detail-fixture.component.html',
  imports: [PageStateComponent, MatchCardComponent],
})
export class TeamDetailFixtureComponent implements OnInit {
  private readonly fixtureService = inject(MatchService);
  private readonly modalController = inject(ModalController);

  @Input() projectId = 0;

  matches: Match[] = [];

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    if (this.projectId > 0) {
      this.fixtureService.loadOnlyTeamMatchesByTeamId(this.projectId).subscribe({
        next: (fixtureMatches) => {
          this.matches = fixtureMatches;
          this.isLoading = false;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        },
      });
    }
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
