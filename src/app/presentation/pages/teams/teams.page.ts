import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamInformationService } from '../../../dataproviders/soccer/teamInformation.service';
import { combineLatest } from 'rxjs';
import { KeyValue } from '@angular/common';
import { RankingTeam } from '../../../core/domain/rankingTeam.model';
import { MatchService } from '../../../dataproviders/soccer/matches/match.service';
import { RankingUtil } from '../../../util/RankingUtil';

@Component({
  templateUrl: 'teams.page.html',
  styleUrls: ['teams.page.scss'],
})
export class TeamsPage implements OnInit {
  heading = 'Jugend';
  teams = new Map();
  showTable;

  isLoading = true;

  teamNameOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return a.key.teamName < b.key.teamName ? -1 : b.key.teamName < a.key.teamName ? 1 : 0;
  };

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private teamInfoService: TeamInformationService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((routeParams) => {
      this.heading = routeParams['heading'];
      this.showTable = routeParams['showTable'];

      this.teams.clear();
      this.isLoading = true;

      for (const teamId of routeParams['teamIds']) {
        combineLatest([this.teamInfoService.loadTeamInformation(teamId), this.matchService.loadAllMatchesByTeamId(teamId)]).subscribe(
          ([teamInfo, matches]) => {
            const ranking = RankingUtil.calculateRanking(matches, null);

            const indexOfFavoriteTeam = ranking.findIndex((value) => value.isFavoriteTeam());
            if (indexOfFavoriteTeam >= 0) {
              let minRanking: RankingTeam[] = [];
              const isFirstRank = indexOfFavoriteTeam === 0;
              const isLastRank = indexOfFavoriteTeam === ranking.length - 1;

              if (isFirstRank) {
                minRanking = [ranking[0], ranking[1], ranking[2]];
              } else if (isLastRank) {
                minRanking = [ranking[ranking.length - 3], ranking[ranking.length - 2], ranking[ranking.length - 1]];
              } else {
                minRanking = [ranking[indexOfFavoriteTeam - 1], ranking[indexOfFavoriteTeam], ranking[indexOfFavoriteTeam + 1]];
              }
              this.teams.set({ teamId: teamId, teamName: teamInfo.name }, minRanking);
            } else {
              this.teams.set({ teamId: teamId, teamName: teamInfo.name }, ranking);
            }

            this.isLoading = false;
          },
        );
      }
    });
  }
}
