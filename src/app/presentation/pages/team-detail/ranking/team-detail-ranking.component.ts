import { Component, Input, OnInit, inject } from '@angular/core';
import { MatchService } from '../../../../dataproviders/soccer/matches/match.service';
import { Match } from '../../../../core/domain/match.model';
import { RankingTeam } from '../../../../core/domain/rankingTeam.model';
import { RankingUtil } from '../../../../util/RankingUtil';
import { RankingService } from '../../../../dataproviders/soccer/ranking/ranking.service';
import { DevService } from '../../../../dataproviders/dev.service';
import { PageStateComponent } from '../../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { RankingComponent } from '../../../shared/ranking/ranking.component';

@Component({
  selector: 'app-team-detail-ranking',
  templateUrl: 'team-detail-ranking.component.html',
  styleUrls: ['team-detail-ranking.component.scss'],
  imports: [PageStateComponent, IonicModule, RankingComponent],
})
export class TeamDetailRankingComponent implements OnInit {
  private readonly matchService = inject(MatchService);
  private readonly rankingService = inject(RankingService);
  private readonly devService = inject(DevService);

  @Input() projectId = 0;

  rankingTypes = [
    { label: 'Gesamt', value: 'total', devOnly: false },
    { label: 'Heim', value: 'home', devOnly: false },
    { label: 'Auswärts', value: 'away', devOnly: false },
    { label: 'Hinrunde', value: 'firstHalf', devOnly: true },
    { label: 'Rückrunde', value: 'secondHalf', devOnly: true },
  ];

  matches: Match[] = [];
  ranking: RankingTeam[] = [];
  isHistoricRanking = false;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    if (this.projectId > 0) {
      this.matchService.loadAllMatchesByTeamId(this.projectId).subscribe({
        next: (matches) => {
          this.matches = matches;
          this.ranking = RankingUtil.calculateRanking(matches, null);

          // For historic rankings we don't have matches and need to load the ranking separately.
          if (matches.length === 0) {
            this.isHistoricRanking = true;
            this.rankingService.loadHistoricRanking(this.projectId).subscribe({
              next: (ranking) => {
                this.ranking = RankingUtil.calculateHistoricRanking(ranking);
              },
              error: (error) => {
                this.isError = true;
                console.error(error);
              },
            });
          }

          this.isLoading = false;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        },
      });
    }
  }

  recalculateRanking(event: any): void {
    this.ranking = RankingUtil.calculateRanking(this.matches, event.detail.value);
  }

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }
}
