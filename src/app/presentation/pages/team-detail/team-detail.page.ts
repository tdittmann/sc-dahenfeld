import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamInformation } from '../../../core/domain/teamInformation.model';
import { TeamInformationService } from '../../../dataproviders/soccer/teamInformation.service';
import { combineLatest } from 'rxjs';

@Component({
    templateUrl: 'team-detail.page.html',
    standalone: false
})
export class TeamDetailPage implements OnInit {
  heading: string;
  projectId: number;
  teamInformation: TeamInformation;
  selectedSeason;

  isLoading = true;
  isError = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamInformationService: TeamInformationService,
  ) {}

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
