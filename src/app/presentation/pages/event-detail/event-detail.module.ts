import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {EventDetailPage} from './event-detail.page';
import {ImageMetaModule} from '../../shared/image-meta/image-meta.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        ImageMetaModule,
    ],
    declarations: [EventDetailPage],
    exports: [EventDetailPage],
    entryComponents: [EventDetailPage]
})
export class EventDetailPageModule {

}
