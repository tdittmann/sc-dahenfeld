import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PlayersPage} from './players.page';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {PersonModule} from '../../person/person.module';
import {RouterModule} from '@angular/router';
import {PageStateModule} from '../../../shared/page-state/page-state.module';

@NgModule({
    providers: [PersonService],
    imports: [
        CommonModule,
        IonicModule,
        PersonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PlayersPage
            }
        ]),
        PageStateModule
    ],
    declarations: [PlayersPage],
})
export class PlayersPageModule {
}
