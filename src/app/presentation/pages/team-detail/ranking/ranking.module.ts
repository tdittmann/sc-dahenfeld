import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RankingComponent} from './ranking.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [RankingComponent],
    entryComponents: [RankingComponent],
    exports: [RankingComponent],
})
export class RankingComponentModule {

}
