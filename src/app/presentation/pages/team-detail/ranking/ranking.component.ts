import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ranking',
    templateUrl: 'ranking.component.html',
    styleUrls: ['ranking.component.scss']
})
export class RankingComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        console.log('RANKING');
    }

}
