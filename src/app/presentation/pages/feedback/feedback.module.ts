import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {FeedbackPage} from './feedback.page';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {FeedbackService} from '../../../dataproviders/feedback/feedback.service';

@NgModule({
    providers: [FeedbackService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        RouterModule.forChild([
            {
                path: '',
                component: FeedbackPage
            }
        ])
    ],
    declarations: [FeedbackPage]
})
export class FeedbackPageModule {
}