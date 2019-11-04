import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {TeamsPage} from './teams.page';
import {TeamInformationService} from '../../../dataproviders/soccer/teamInformation.service';
import {RankingService} from '../../../dataproviders/soccer/ranking/ranking.service';
import {RankingComponentModule} from '../../shared/ranking/ranking.module';

@NgModule({
    providers: [TeamInformationService, RankingService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: TeamsPage
            }
        ]),
        RankingComponentModule,
    ],
    declarations: [TeamsPage]
})
export class TeamsPageModule {

}
