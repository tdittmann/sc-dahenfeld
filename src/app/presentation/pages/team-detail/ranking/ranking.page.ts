import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RankingService} from '../../../../dataproviders/soccer/ranking/ranking.service';
import {RankingTeam} from '../../../../core/domain/rankingTeam.model';

@Component({
    selector: 'ranking',
    templateUrl: 'ranking.page.html',
    styleUrls: ['ranking.page.scss']
})
export class RankingPage implements OnInit {

    rankingTeams: RankingTeam[] = [];

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
                    },
                    error => {
                        // TODO tdit0703: Error Handling
                        console.error(error);
                    }
                );

            }
        );
    }

}
