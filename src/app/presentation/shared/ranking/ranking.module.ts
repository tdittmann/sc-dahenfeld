import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RankingComponent} from './ranking.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [RankingComponent],
    exports: [RankingComponent]
})
export class RankingModule {

}
