import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PlayersPage} from './players.page';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {PersonModule} from '../../person/person.module';

@NgModule({
    providers: [PersonService],
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
