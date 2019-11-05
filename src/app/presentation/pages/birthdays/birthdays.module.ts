import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {BirthdaysPage} from './birthdays.page';
import {BirthdayService} from '../../../dataproviders/birthday/birthday.service';
import {BirthdayFilterPipe} from './birthday.filter';
import {PersonModule} from '../person/person.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';

@NgModule({
    providers: [BirthdayService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        PersonModule,
        RouterModule.forChild([
            {
                path: '',
                component: BirthdaysPage
            }
        ]),
        PageStateModule
    ],
    declarations: [BirthdaysPage, BirthdayFilterPipe]
})
export class BirthdaysPageModule {
}
