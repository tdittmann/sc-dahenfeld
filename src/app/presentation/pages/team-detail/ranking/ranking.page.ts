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
        {label: 'Gesamt', value: null, selected: true},
        {label: 'Heim', value: 'home', selected: false},
        {label: 'Auswärts', value: 'away', selected: false}
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

                this.fixtureService.loadAllMatchesByTeamId(teamId).subscribe(
                    matches => {
                        this.matches = matches;

                        this.ranking = RankingUtil.calculateRanking(matches, null);

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

    recalculateRanking(event: any): void {
        this.ranking = RankingUtil.calculateRanking(this.matches, event.detail.value);
    }

}
