import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RankingService} from '../../../dataproviders/soccer/ranking/ranking.service';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';
import {combineLatest} from 'rxjs';
import {KeyValue} from '@angular/common';

@Component({
    templateUrl: 'teams.page.html',
    styleUrls: ['teams.page.scss']
})
export class TeamsPage implements OnInit {

    heading = 'Jugend';
    teams = new Map;

    teamNameOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
        return a.key.teamName < b.key.teamName ? -1 : (b.key.teamName < a.key.teamName ? 1 : 0);
    };

    constructor(private route: ActivatedRoute,
                private teamInfoService: TeamInformationService,
                private rankingService: RankingService) {

    }

    ngOnInit(): void {

        this.route.queryParams.subscribe(
            routeParams => {

                this.heading = routeParams['heading'];

                for (const teamId of routeParams['teamIds']) {

                    combineLatest([this.teamInfoService.loadTeamInformation(teamId), this.rankingService.loadRanking(teamId)])
                        .subscribe(([teamInfo, ranking]) => {
                            this.teams.set({teamId: teamId, teamName: teamInfo.name}, ranking);
                        });

                }

            }
        );

    }

}
