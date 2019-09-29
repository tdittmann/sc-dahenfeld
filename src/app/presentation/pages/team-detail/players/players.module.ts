import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PlayersPage} from './players.page';
import {PlayerService} from '../../../../dataproviders/soccer/players/player.service';
import {PersonModule} from '../../person/person.module';

@NgModule({
    providers: [PlayerService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PersonModule,
    ],
    declarations: [PlayersPage],
    exports: [PlayersPage],
    entryComponents: [PlayersPage],
})
export class PlayersPageModule {
}
