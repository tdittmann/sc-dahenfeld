import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MatchDetailService} from '../../../dataproviders/soccer/match-detail/match-detail.service';
import {LoadingService} from '../../shared/loading/loading.service';
import {ErrorService} from '../../shared/error/error.service';
import {MatchDetail} from '../../../core/domain/matchDetail.model';

@Component({
    templateUrl: 'match-detail.page.html',
    styleUrls: ['match-detail.page.scss']
})
export class MatchDetailPage implements OnInit {

    @Input() matchId: number;

    matchDetails: MatchDetail;

    constructor(private modalController: ModalController,
                private matchDetailService: MatchDetailService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {

        this.matchDetailService.loadMatchDetails(this.matchId).subscribe(
            matchDetails => {
                this.matchDetails = matchDetails;

                this.loadingService.hideLoading();
            },
            error => {
                console.error(error);
                this.errorService.showError('Beim Laden des Spiels ist ein Fehler aufgetreten');
            }
        );
    }

    getCssClass(clubId: number): string {
        if (this.matchDetails.homeId === clubId) {
            return 'homeTeam';
        } else {
            return 'awayTeam';
        }
    }

    public closeModal() {
        return this.modalController.dismiss();
    }

}
