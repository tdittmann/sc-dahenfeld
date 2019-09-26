import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FixtureService} from '../../../../dataproviders/soccer/fixture/fixture.service';
import {FixtureMatch} from '../../../../core/domain/fixtureMatch.model';
import {DateUtils} from '../../../../util/DateUtils';

// TODO tdit0703: Scroll to next match
@Component({
    selector: 'fixture',
    templateUrl: 'fixture.page.html',
    styleUrls: ['fixture.page.scss']
})
export class FixturePage implements OnInit {

    matches: FixtureMatch[] = [];
    nextMatchId = 0;

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
                        this.nextMatchId = this.getNextMatchId(this.matches);
                    },
                    error => {
                        // TODO tdit0703: Error handling
                        console.error(error);
                    }
                );
            }
        );
    }

    private getNextMatchId(matches: FixtureMatch[]): number {
        let actualMatchId: number;
        let lastMatchId: number;
        let actualMatchdayDate = DateUtils.ofIsoDate('9999-12-31');

        for (let i = 0; i < matches.length; i++) {
            lastMatchId = matches[i].id;

            if (isNaN(matches[i].homeResult) && matches[i].date.isSameOrBefore(actualMatchdayDate)) {
                actualMatchId = matches[i].id;
                actualMatchdayDate = matches[i].date;
            }
        }

        // Fallback: use latest match
        if (!actualMatchId) {
            actualMatchId = lastMatchId;
        }

        return actualMatchId;
    }

}
