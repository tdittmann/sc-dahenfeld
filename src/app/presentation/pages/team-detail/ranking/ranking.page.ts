import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../../../../dataproviders/soccer/matches/match.service';
import {Match} from '../../../../core/domain/match.model';
import {RankingTeam} from '../../../../core/domain/rankingTeam.model';
import {RankingUtil} from '../../../../util/RankingUtil';

@Component({
    templateUrl: 'ranking.page.html',
    styleUrls: ['ranking.page.scss']
})
export class RankingPage implements OnInit {

    rankingTypes = [
        {label: 'Gesamt', value: 'total'},
        {label: 'Heim', value: 'home'},
        {label: 'Auswärts', value: 'away'}
    ];

    matches: Match[] = [];
    ranking: RankingTeam[] = [];

    isLoading = true;
    isError = false;

    constructor(private route: ActivatedRoute,
                private fixtureService: MatchService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.fixtureService.loadAllMatchesByTeamId(teamId).subscribe({
                    next:
                        matches => {
                            this.matches = matches;

                            this.ranking = RankingUtil.calculateRanking(matches, null);

                            this.isLoading = false;
                        },
                    error: error => {
                        this.isError = true;
                        console.error(error);
                    }
                });
            }
        );
    }

    recalculateRanking(event: any): void {
        this.ranking = RankingUtil.calculateRanking(this.matches, event.detail.value);
    }

}
