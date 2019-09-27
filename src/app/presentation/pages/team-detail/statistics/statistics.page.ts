import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'statistics',
    templateUrl: 'statistics.page.html',
    styleUrls: ['statistics.page.scss']
})
export class StatisticsPage implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                // TODO tdit0703: Load stats
            }
        );
    }

}
