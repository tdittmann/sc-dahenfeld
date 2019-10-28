import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeamInformation} from '../../../core/domain/teamInformation.model';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';
import {ErrorService} from '../../shared/error/error.service';
import {LoadingService} from '../../shared/loading/loading.service';

@Component({
    templateUrl: 'team-detail.page.html',
    styleUrls: ['team-detail.page.scss']
})
export class TeamDetailPage implements OnInit {

    teamInformation: TeamInformation;

    constructor(private route: ActivatedRoute,
                private teamDetailService: TeamInformationService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                this.teamDetailService.loadTeamInformation(params['id'])
                    .subscribe(
                        data => {
                            this.teamInformation = data;

                            this.loadingService.hideLoading();
                        },
                        error => this.errorService.showError(error)
                    );
            }
        );

    }

}
