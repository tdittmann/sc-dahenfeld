import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamInformation } from '../../../core/domain/teamInformation.model';
import { TeamInformationService } from '../../../dataproviders/soccer/teamInformation.service';
import { combineLatest } from 'rxjs';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { IonicModule } from '@ionic/angular';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { TabsComponent } from '../../shared/tabs/tabs/tabs.component';
import { TabComponent } from '../../shared/tabs/tab/tab.component';
import { DynamicContentComponent } from '../../shared/dynamic-content/dynamic-content.component';
import { TeamDetailRankingComponent } from './ranking/team-detail-ranking.component';
import { TeamDetailFixtureComponent } from './fixture/team-detail-fixture.component';
import { TeamDetailPlayersComponent } from './players/team-detail-players.component';
import { TeamDetailStatisticsComponent } from './statistics/team-detail-statistics.component';

@Component({
  templateUrl: 'team-detail.page.html',
  imports: [
    PageHeaderComponent,
    IonicModule,
    PageStateComponent,
    TabsComponent,
    TabComponent,
    DynamicContentComponent,
    TeamDetailRankingComponent,
    TeamDetailFixtureComponent,
    TeamDetailPlayersComponent,
    TeamDetailStatisticsComponent,
  ],
})
export class TeamDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly teamInformationService = inject(TeamInformationService);

  heading: string;
  projectId: number;
  teamInformation: TeamInformation;
  selectedSeason;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    combineLatest([this.route.params, this.route.queryParams]).subscribe(([params, queryParams]) => {
      this.projectId = parseInt(params['id'], 10);

      // Load team information
      this.teamInformationService.loadTeamInformation(this.projectId).subscribe({
        next: (data) => {
          this.teamInformation = data;
          this.selectedSeason = this.projectId;
          this.heading = queryParams['heading'] ? queryParams['heading'] : this.teamInformation.name;

          this.isLoading = false;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        },
      });
    });
  }

  changeSeason(event: any) {
    const oldSeason = this.selectedSeason;
    this.selectedSeason = event.detail.value;
    this.router.navigate([this.router.url.replace(oldSeason, event.detail.value).split('?')[0]], {
      queryParams: {
        heading: this.heading,
      },
    });
  }
}
