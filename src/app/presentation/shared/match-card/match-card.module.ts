import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MatchCardComponent} from './match-card.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [MatchCardComponent],
    exports: [MatchCardComponent]
})
export class MatchCardModule {

}
