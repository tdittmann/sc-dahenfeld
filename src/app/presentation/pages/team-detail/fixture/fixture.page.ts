import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FixtureService} from '../../../../dataproviders/soccer/fixture/fixture.service';
import {FixtureMatch} from '../../../../core/domain/fixtureMatch.model';

@Component({
    selector: 'fixture',
    templateUrl: 'fixture.page.html',
    styleUrls: ['fixture.page.scss']
})
export class FixturePage implements OnInit {

    matches: FixtureMatch[] = [];

    isLoading = true;
    isError = false;

    constructor(private route: ActivatedRoute,
                private fixtureService: FixtureService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.fixtureService.loadFixture(teamId).subscribe(
                    fixtureMatches => {
                        this.matches = fixtureMatches;

                        this.isLoading = false;
                    },
                    error => {
                        this.isError = true;
                        console.error(error);
                    }
                );
            }
        );
    }

}
