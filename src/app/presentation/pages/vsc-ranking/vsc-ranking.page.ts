import {Component, OnInit} from '@angular/core';
import {VscService} from '../../../dataproviders/vsc/vsc.service';
import {ActivatedRoute} from '@angular/router';
import {VscAthlete} from '../../../core/domain/vscAthlete.model';

@Component({
    templateUrl: 'vsc-ranking.page.html',
    styleUrls: ['vsc-ranking.page.scss']
})
export class VscRankingPage implements OnInit {

    heading = 'Virtuelle Sport Challenge';
    ranking: VscAthlete[] = [];
    actualMonth = (new Date().getMonth() + 1).toString();

    isLoading = true;
    isError = false;

    constructor(private vscService: VscService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(
            routeParams => {
                this.heading = routeParams['heading'];
            });

        this.loadRanking(null);
    }

    expandAthlete(athlete: VscAthlete) {
        athlete.expanded = !athlete.expanded;
    }

    reloadRanking(event) {
        this.actualMonth = event.detail.value;
        this.ranking = [];
        this.isLoading = true;
        this.loadRanking(null);
    }

    private loadRanking(event) {
        let backendCall;

        if (this.actualMonth === 'overall') {
            backendCall = this.vscService.loadOverallRanking();
        } else {
            backendCall = this.vscService.loadRanking(parseInt(this.actualMonth, 10));
        }

        backendCall.subscribe(
            ranking => {
                this.ranking = ranking;
                this.isLoading = false;
                this.completeEvent(event);
            },
            error => {
                this.isError = true;
                console.error(error);
                this.completeEvent(event);
            }
        );
    }

    completeEvent(event) {
        if (event) {
            event.target.complete();
        }
    }

}
