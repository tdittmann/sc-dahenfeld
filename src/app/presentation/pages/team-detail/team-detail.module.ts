import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TeamDetailPage } from './team-detail.page';
import { TeamInformationService } from '../../../dataproviders/soccer/teamInformation.service';
import { SharedModule } from '../../shared/shared.module';
import { TeamDetailArticleComponent } from './article/team-detail-article.component';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../../../dataproviders/article/article.service';

import { MatchService } from '../../../dataproviders/soccer/matches/match.service';
import { TeamDetailRankingComponent } from './ranking/team-detail-ranking.component';

import { MatchDetailPageModule } from '../match-detail/match-detail.module';
import { TeamDetailFixtureComponent } from './fixture/team-detail-fixture.component';

import { PersonService } from '../../../dataproviders/soccer/person/person.service';
import { PersonModule } from '../person/person.module';
import { TeamDetailPlayersComponent } from './players/team-detail-players.component';
import { StatisticsCardModule } from '../../shared/statistics-card/statistics-card.module';
import { TeamDetailStatisticsComponent } from './statistics/team-detail-statistics.component';
import { FormsModule } from '@angular/forms';
import { TeamDetailStatisticsModalComponent } from './statistics/statistics-modal/team-detail-statistics-modal.component';
import { PersonFilter } from './statistics/statistics-modal/person.filter';
import { DynamicContentModule } from '../../shared/dynamic-content/dynamic-content.module';
import { RankingService } from '../../../dataproviders/soccer/ranking/ranking.service';

@NgModule({
  providers: [TeamInformationService, ArticleService, MatchService, PersonService, RankingService],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MatchDetailPageModule,
    PersonModule,
    StatisticsCardModule,
    DynamicContentModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeamDetailPage,
      },
    ]),
    TeamDetailPage,
    TeamDetailArticleComponent,
    TeamDetailRankingComponent,
    TeamDetailFixtureComponent,
    TeamDetailPlayersComponent,
    TeamDetailStatisticsComponent,
    TeamDetailStatisticsModalComponent,
    PersonFilter,
  ],
})
export class TeamDetailPageModule {}
