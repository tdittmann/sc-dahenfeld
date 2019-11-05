import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeamInformation} from '../../../core/domain/teamInformation.model';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';

@Component({
    templateUrl: 'team-detail.page.html',
    styleUrls: ['team-detail.page.scss']
})
export class TeamDetailPage implements OnInit {

    teamInformation: TeamInformation;

    isLoading = true;
    isError = false;

    constructor(private route: ActivatedRoute,
                private teamDetailService: TeamInformationService) {

    }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                this.teamDetailService.loadTeamInformation(params['id'])
                    .subscribe(
                        data => {
                            this.teamInformation = data;

                            this.isLoading = false;
                        },
                        error => {
                            this.isError = true;
                            console.error(error);
                        }
                    );
            }
        );

    }

}
