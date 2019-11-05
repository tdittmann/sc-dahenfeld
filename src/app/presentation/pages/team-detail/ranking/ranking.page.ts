import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RankingService} from '../../../../dataproviders/soccer/ranking/ranking.service';
import {RankingTeam} from '../../../../core/domain/rankingTeam.model';

@Component({
    templateUrl: 'ranking.page.html',
    styleUrls: ['ranking.page.scss']
})
export class RankingPage implements OnInit {

    rankingTeams: RankingTeam[] = [];

    isLoading = true;
    isError = false;

    constructor(private route: ActivatedRoute,
                private rankingService: RankingService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.rankingService.loadRanking(teamId).subscribe(
                    rankingTeams => {
                        this.rankingTeams = rankingTeams;

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
