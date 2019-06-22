import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PageHeaderModule} from '../../components/page-header/page-header.module';
import {BirthdaysPage} from './birthdays.page';
import {BirthdayService} from '../../../dataproviders/birthday/birthday.service';
import {BirthdayFilterPipe} from './birthday.filter';

@NgModule({
    providers: [BirthdayService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: BirthdaysPage
            }
        ])
    ],
    declarations: [BirthdaysPage, BirthdayFilterPipe]
})
export class BirthdaysPageModule {
}
