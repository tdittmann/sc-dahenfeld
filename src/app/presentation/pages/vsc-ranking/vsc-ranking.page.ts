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

        this.loadRanking();
    }

    expandAthlete(athlete: VscAthlete) {
        athlete.expanded = !athlete.expanded;
    }

    reloadRanking(event) {
        this.actualMonth = event.detail.value;
        this.ranking = [];
        this.isLoading = true;
        this.loadRanking();
    }

    private loadRanking() {
        this.vscService.loadRanking(parseInt(this.actualMonth, 10))
            .subscribe(
                ranking => {
                    this.ranking = ranking;
                    this.isLoading = false;
                },
                error => {
                    this.isError = true;
                    console.error(error);
                }
            );
    }

}
