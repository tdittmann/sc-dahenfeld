import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {EventDetailPage} from './event-detail.page';
import {ImageMetaModule} from '../../shared/image-meta/image-meta.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        ImageMetaModule,
        RouterModule.forChild([
            {
                path: '',
                component: EventDetailPage
            }
        ]),
    ],
    declarations: [EventDetailPage]
})
export class EventDetailPageModule {

}
