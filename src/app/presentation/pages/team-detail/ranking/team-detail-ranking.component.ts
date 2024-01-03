import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../../../../dataproviders/soccer/matches/match.service';
import {Match} from '../../../../core/domain/match.model';
import {RankingTeam} from '../../../../core/domain/rankingTeam.model';
import {RankingUtil} from '../../../../util/RankingUtil';

@Component({
    selector: 'app-team-detail-ranking',
    templateUrl: 'team-detail-ranking.component.html',
    styleUrls: ['team-detail-ranking.component.scss']
})
export class TeamDetailRankingComponent implements OnInit {

    @Input() projectId = 0;

    rankingTypes = [
        {label: 'Gesamt', value: 'total'},
        {label: 'Heim', value: 'home'},
        {label: 'Auswärts', value: 'away'}
    ];

    matches: Match[] = [];
    ranking: RankingTeam[] = [];

    isLoading = true;
    isError = false;

    constructor(private fixtureService: MatchService) {

    }

    ngOnInit(): void {

        if (this.projectId > 0) {
            this.fixtureService.loadAllMatchesByTeamId(this.projectId).subscribe({
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

    }

    recalculateRanking(event: any): void {
        this.ranking = RankingUtil.calculateRanking(this.matches, event.detail.value);
    }

}
