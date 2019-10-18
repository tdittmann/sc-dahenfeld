import {Component, OnInit} from '@angular/core';
import {RankingPage} from './ranking/ranking.page';
import {ActivatedRoute} from '@angular/router';
import {FixturePage} from './fixture/fixture.page';
import {PlayersPage} from './players/players.page';
import {StatisticsPage} from './statistics/statistics.page';
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

    rankingPage = RankingPage;
    fixturePage = FixturePage;
    playersPage = PlayersPage;
    statisticsPage = StatisticsPage;

    constructor(private route: ActivatedRoute,
                private teamDetailService: TeamInformationService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.teamDetailService.loadTeamInformation(teamId)
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
