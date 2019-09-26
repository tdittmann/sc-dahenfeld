import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RankingPage} from './ranking.page';
import {RankingService} from '../../../../dataproviders/soccer/ranking/ranking.service';

@NgModule({
    providers: [RankingService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [RankingPage],
    exports: [RankingPage],
    entryComponents: [RankingPage],
})
export class RankingPageModule {
}
