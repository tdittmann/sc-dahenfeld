import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PlayersPage} from './players.page';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {PersonModule} from '../../person/person.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        IonicModule,
        PersonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: PlayersPage
            }
        ]),
    ],
    declarations: [PlayersPage],
})
export class PlayersPageModule {
}
