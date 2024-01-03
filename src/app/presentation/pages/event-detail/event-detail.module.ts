import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {EventDetailPage} from './event-detail.page';
import {ImageMetaModule} from '../../shared/image-meta/image-meta.module';
import {ModalHeaderModule} from '../../shared/modal-header/modal-header.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        ImageMetaModule,
        ModalHeaderModule,
    ],
    declarations: [EventDetailPage],
    exports: [EventDetailPage],
})
export class EventDetailPageModule {

}
