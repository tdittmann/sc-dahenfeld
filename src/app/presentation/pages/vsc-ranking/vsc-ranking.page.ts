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
    yearsToShow: number[] = [];

    month: number = new Date().getMonth() + 1;
    year: number = new Date().getFullYear();
    selectedMonthAndYear = `${this.year}-${this.month}`;

    isLoading = true;
    isError = false;

    constructor(private vscService: VscService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const currentYear = new Date().getFullYear();
        for (let year = 2021; year <= currentYear; year++) {
            this.yearsToShow.push(year);
        }

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
        const value = event.detail.value;

        this.selectedMonthAndYear = value;
        const splittedValue = value.split('-');
        this.year = splittedValue[0];
        this.month = splittedValue[1] ?? 0;

        this.ranking = [];
        this.isLoading = true;
        this.loadRanking();
    }

    private loadRanking() {
        this.vscService.loadRanking(this.year, this.month).subscribe({
            next: ranking => {
                this.ranking = ranking;
                this.isLoading = false;
            },
            error: error => {
                this.isError = true;
                console.error(error);
            }

        });
    }

}
