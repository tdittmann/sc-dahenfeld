import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RankingPage} from './ranking.page';

@NgModule({
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
