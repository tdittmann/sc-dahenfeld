import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {BirthdaysPage} from './birthdays.page';
import {BirthdayFilterPipe} from './birthday.filter';
import {PersonModule} from '../person/person.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {OrderModule} from 'ngx-order-pipe';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
    providers: [PersonService],
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
        PageStateModule,
        OrderModule,
        ScrollingModule
    ],
    declarations: [BirthdaysPage, BirthdayFilterPipe]
})
export class BirthdaysPageModule {
}
