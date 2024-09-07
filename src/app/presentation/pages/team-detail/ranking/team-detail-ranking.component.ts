import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from '../../../../dataproviders/soccer/matches/match.service';
import { Match } from '../../../../core/domain/match.model';
import { RankingTeam } from '../../../../core/domain/rankingTeam.model';
import { RankingUtil } from '../../../../util/RankingUtil';
import { RankingService } from '../../../../dataproviders/soccer/ranking/ranking.service';

@Component({
  selector: 'app-team-detail-ranking',
  templateUrl: 'team-detail-ranking.component.html',
  styleUrls: ['team-detail-ranking.component.scss'],
})
export class TeamDetailRankingComponent implements OnInit {
  @Input() projectId = 0;

  rankingTypes = [
    { label: 'Gesamt', value: 'total' },
    { label: 'Heim', value: 'home' },
    { label: 'Auswärts', value: 'away' },
  ];

  matches: Match[] = [];
  ranking: RankingTeam[] = [];
  isHistoricRanking = false;

  isLoading = true;
  isError = false;

  constructor(
    private matchService: MatchService,
    private rankingService: RankingService,
  ) {}

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
}
