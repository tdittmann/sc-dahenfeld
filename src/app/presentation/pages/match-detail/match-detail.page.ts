import {Component, Input, OnInit} from '@angular/core';
import {MatchDetailService} from '../../../dataproviders/soccer/match-detail/match-detail.service';
import {MatchDetail} from '../../../core/domain/matchDetail.model';

@Component({
    templateUrl: 'match-detail.page.html',
    styleUrls: ['match-detail.page.scss']
})
export class MatchDetailPage implements OnInit {

    @Input() matchId: number;

    matchDetails: MatchDetail;
    pastMatches: MatchDetail[] = [];

    isLoading = true;
    isError = false;

    constructor(private matchDetailService: MatchDetailService) {

    }

    ngOnInit(): void {
        this.loadMatch(null);
    }

    loadMatch(event) {
        this.matchDetailService.loadMatchDetails(this.matchId).subscribe({
            next: matchDetails => {
                this.matchDetails = matchDetails;
                this.loadPastMatches(matchDetails.matchId, matchDetails.homeTeamId, matchDetails.awayTeamId);
                this.isLoading = false;
                this.completeEvent(event);
            },
            error: error => {
                this.isError = true;
                console.error(error);
                this.completeEvent(event);
            }
        });
    }

    loadPastMatches(matchId: number, teamId1: number, teamId2: number) {
        this.matchDetailService.loadPastMatches(matchId, teamId1, teamId2).subscribe({
            next: pastMatches => {
                this.pastMatches = pastMatches;
            },
            error: error => {
                console.error(error);
            }
        });
    }

    completeEvent(event) {
        if (event) {
            event.target.complete();
        }
    }

}
