import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {PageHeaderModule} from '../../components/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {TeamDetailPage} from './team-detail.page';
import {RankingComponentModule} from './ranking/ranking.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        RankingComponentModule,
        RouterModule.forChild([
            {
                path: '',
                component: TeamDetailPage
            }
        ])
    ],
    declarations: [TeamDetailPage]
})
export class TeamDetailPageModule {

}
