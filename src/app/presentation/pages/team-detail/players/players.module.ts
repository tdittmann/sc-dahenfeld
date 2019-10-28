import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PlayersPage} from './players.page';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {PersonModule} from '../../person/person.module';
import {RouterModule} from '@angular/router';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PersonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PlayersPage
            }
        ])
    ],
    declarations: [PlayersPage],
})
export class PlayersPageModule {
}
