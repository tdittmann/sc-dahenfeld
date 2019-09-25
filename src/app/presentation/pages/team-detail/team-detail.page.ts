import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'team-detail.page.html',
    styleUrls: ['team-detail.page.scss']
})
export class TeamDetailPage implements OnInit {

    teamName = '';

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.teamName = 'fill me';

                console.log(teamId);
            }
        );

    }

}
