import {Component, Input} from '@angular/core';
import {Moment} from 'moment';
import {MatchDetailPage} from '../../pages/match-detail/match-detail.page';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'match-card',
    templateUrl: 'match-card.component.html',
    styleUrls: ['match-card.component.scss']
})
export class MatchCardComponent {

    @Input() matchId: number;

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

    constructor(private modalController: ModalController) {

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

    public openMatchDetail() {
        this.modalController.create({
            component: MatchDetailPage,
            componentProps: {
                'matchId': this.matchId
            }
        }).then(modal => modal.present());
    }

}
