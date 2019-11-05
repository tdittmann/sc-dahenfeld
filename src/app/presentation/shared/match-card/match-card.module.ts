import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MatchCardComponent} from './match-card.component';
import {MatchDetailPageModule} from '../../pages/match-detail/match-detail.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        MatchDetailPageModule,
    ],
    declarations: [MatchCardComponent],
    exports: [MatchCardComponent]
})
export class MatchCardModule {

}
