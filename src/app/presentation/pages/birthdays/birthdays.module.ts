import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BirthdaysPage} from './birthdays.page';
import {BirthdayFilterPipe} from './birthday.filter';
import {PersonModule} from '../person/person.module';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {SharedModule} from '../../shared/shared.module';

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
                component: BirthdaysPage
            }
        ]),
        SharedModule,
        ScrollingModule
    ],
    declarations: [BirthdaysPage, BirthdayFilterPipe]
})
export class BirthdaysPageModule {
}
