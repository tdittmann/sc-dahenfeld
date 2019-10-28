import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RankingPage} from './ranking.page';
import {RankingService} from '../../../../dataproviders/soccer/ranking/ranking.service';
import {RankingComponentModule} from '../../../shared/ranking/ranking.module';
import {RouterModule} from '@angular/router';

@NgModule({
    providers: [RankingService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RankingComponentModule,
        RouterModule.forChild([
            {
                path: '',
                component: RankingPage
            }
        ])
    ],
    declarations: [RankingPage],
})
export class RankingPageModule {
}
