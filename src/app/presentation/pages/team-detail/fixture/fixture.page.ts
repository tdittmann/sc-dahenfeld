import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FixtureService} from '../../../../dataproviders/soccer/fixture/fixture.service';
import {FixtureMatch} from '../../../../core/domain/fixtureMatch.model';
import {ErrorService} from '../../../shared/error/error.service';
import {LoadingService} from '../../../shared/loading/loading.service';

@Component({
    selector: 'fixture',
    templateUrl: 'fixture.page.html',
    styleUrls: ['fixture.page.scss']
})
export class FixturePage implements OnInit {

    matches: FixtureMatch[] = [];

    constructor(private route: ActivatedRoute,
                private fixtureService: FixtureService,
                private loadingService: LoadingService,
                private errorService: ErrorService) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const teamId = params['id'];

                this.fixtureService.loadFixture(teamId).subscribe(
                    fixtureMatches => {
                        this.matches = fixtureMatches;

                        this.loadingService.hideLoading();
                    },
                    error => this.errorService.showError(error)
                );
            }
        );
    }

}
