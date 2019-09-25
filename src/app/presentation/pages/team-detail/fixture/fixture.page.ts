import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'fixture',
    templateUrl: 'fixture.page.html',
    styleUrls: ['fixture.page.scss']
})
export class FixturePage implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                // TODO tdit0703: Load Ranking
            }
        );
    }

}
