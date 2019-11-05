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

    isLoading = true;
    isError = false;

    constructor(private matchDetailService: MatchDetailService) {

    }

    ngOnInit(): void {

        this.matchDetailService.loadMatchDetails(this.matchId).subscribe(
            matchDetails => {
                this.matchDetails = matchDetails;

                this.isLoading = false;
            },
            error => {
                this.isError = true;
                console.error(error);
            }
        );
    }

}
