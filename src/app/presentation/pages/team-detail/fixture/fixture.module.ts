import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FixturePage} from './fixture.page';
import {MatchService} from '../../../../dataproviders/soccer/matches/match.service';
import {MatchCardModule} from '../../../shared/match-card/match-card.module';
import {RouterModule} from '@angular/router';
import {MatchDetailPageModule} from '../../match-detail/match-detail.module';
import {PageStateModule} from '../../../shared/page-state/page-state.module';

@NgModule({
    providers: [MatchService],
    imports: [
        CommonModule,
        IonicModule,
        MatchCardModule,
        MatchDetailPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: FixturePage
            }
        ]),
        PageStateModule
    ],
    declarations: [FixturePage],
})
export class FixturePageModule {
}
