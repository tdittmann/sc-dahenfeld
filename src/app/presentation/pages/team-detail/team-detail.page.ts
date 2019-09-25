import {Component, OnInit} from '@angular/core';
import {RankingPage} from './ranking/ranking.page';
import {ActivatedRoute} from '@angular/router';
import {SoccerTeamService} from '../../../dataproviders/soccer/soccerTeam.service';
import {FixturePage} from './fixture/fixture.page';
import {PlayersPage} from './players/players.page';
import {StatisticsPage} from './statistics/statistics.page';

@Component({
    templateUrl: 'team-detail.page.html',
    styleUrls: ['team-detail.page.scss']
})
export class TeamDetailPage implements OnInit {

    teamName = '';

    rankingPage = RankingPage;
    fixturePage = FixturePage;
    playersPage = PlayersPage;
    statisticsPage = StatisticsPage;

    constructor(private route: ActivatedRoute,
                private teamDetailService: SoccerTeamService) {

    }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.teamDetailService.loadTeamInformation(teamId)
                    .subscribe(
                        data => {
                            this.teamName = data.name;
                        },
                        error => {
                            // TODO tdit0703: Error handling
                            console.error(error);
                        }
                    );
                this.teamName = teamId;
            }
        );

    }

}
