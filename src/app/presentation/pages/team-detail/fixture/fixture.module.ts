import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FixturePage} from './fixture.page';
import {FixtureService} from '../../../../dataproviders/soccer/fixture/fixture.service';
import {MatchCardModule} from '../../../shared/match-card/match-card.module';
import {RouterModule} from '@angular/router';

@NgModule({
    providers: [FixtureService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatchCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: FixturePage
            }
        ])
    ],
    declarations: [FixturePage],
})
export class FixturePageModule {
}
