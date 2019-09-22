import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'team-detail.page.html',
    styleUrls: ['team-detail.page.scss']
})
export class TeamDetailPage implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                console.log(teamId);
            }
        );

    }

}
