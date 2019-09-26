import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FixturePage} from './fixture.page';
import {FixtureService} from '../../../../dataproviders/soccer/fixture/fixture.service';
import {MatchCardModule} from '../../../shared/match-card/match-card.module';

@NgModule({
    providers: [FixtureService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatchCardModule,
    ],
    declarations: [FixturePage],
    exports: [FixturePage],
    entryComponents: [FixturePage],
})
export class FixturePageModule {
}
