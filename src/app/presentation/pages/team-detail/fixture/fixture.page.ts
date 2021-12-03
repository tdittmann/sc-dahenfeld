import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../../../../dataproviders/soccer/matches/match.service';
import {Match} from '../../../../core/domain/match.model';

@Component({
    selector: 'fixture',
    templateUrl: 'fixture.page.html',
    styleUrls: ['fixture.page.scss']
})
export class FixturePage implements OnInit {

    matches: Match[] = [];

    isLoading = true;
    isError = false;

    constructor(private route: ActivatedRoute,
                private fixtureService: MatchService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.fixtureService.loadOnlyTeamMatchesByTeamId(teamId).subscribe({
                    next:
                        fixtureMatches => {
                            this.matches = fixtureMatches;

                            this.isLoading = false;
                        },
                    error: error => {
                        this.isError = true;
                        console.error(error);
                    }
                });
            }
        );
    }

}
