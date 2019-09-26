import {Component, Input} from '@angular/core';
import {Moment} from 'moment';

// TODO tdit0703: Tests
@Component({
    selector: 'match-card',
    templateUrl: 'match-card.component.html',
    styleUrls: ['match-card.component.scss']
})
export class MatchCardComponent {

    @Input() startDate: Moment;
    @Input() location: string;
    @Input() footerLeft: string;
    @Input() footerRight: string;

    @Input() homeName: string;
    @Input() homeImage: string;
    @Input() homeResult: number;

    @Input() awayName: string;
    @Input() awayImage: string;
    @Input() awayResult: number;

    constructor() {

    }

    public isHomeWin(): boolean {
        return this.homeResult > this.awayResult;
    }

    public isAwayWin(): boolean {
        return this.awayResult > this.homeResult;
    }

    public existsResult(): boolean {
        return !isNaN(this.homeResult) && !isNaN(this.awayResult);
    }

    public getFormattedStartTime(): string {
        if (!this.startDate) {
            return '';
        }

        return this.startDate
            .format('HH:mm');
    }

}
