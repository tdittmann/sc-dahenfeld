import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'players',
    templateUrl: 'players.page.html',
    styleUrls: ['players.page.scss']
})
export class PlayersPage implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                // TODO tdit0703: Load Players
            }
        );
    }

}
