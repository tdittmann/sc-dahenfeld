import {Component, Input, OnChanges} from '@angular/core';
import {MatchDetail} from '../../../../core/domain/matchDetail.model';

@Component({
    selector: 'app-match-head-to-head',
    templateUrl: 'match-head-to-head.component.html',
    styleUrls: ['match-head-to-head.component.scss']
})
export class MatchHeadToHeadComponent implements OnChanges {

    @Input() homeId = 0;
    @Input() awayId = 0;
    @Input() matches: MatchDetail[] = [];

    homeTeamWins = 0;
    homeTeamWinsPercentage = 0;
    draws = 0;
    drawsPercentage = 0;
    awayTeamWins = 0;
    awayTeamWinsPercentage = 0;

    ngOnChanges(): void {

        this.matches.forEach(match => {

            if (match.homeId === this.homeId) {

                if (match.homeResult > match.awayResult) {
                    this.homeTeamWins++;
                } else if (match.homeResult < match.awayResult) {
                    this.awayTeamWins++;
                } else {
                    this.draws++;
                }

            } else if (match.awayId === this.homeId) {
                if (match.homeResult < match.awayResult) {
                    this.homeTeamWins++;
                } else if (match.homeResult > match.awayResult) {
                    this.awayTeamWins++;
                } else {
                    this.draws++;
                }
            }

        });

        this.homeTeamWinsPercentage = Math.round(this.homeTeamWins / this.matches.length * 100);
        this.awayTeamWinsPercentage = Math.round(this.awayTeamWins / this.matches.length * 100);
        this.drawsPercentage = Math.round(this.draws / this.matches.length * 100);

    }

}
