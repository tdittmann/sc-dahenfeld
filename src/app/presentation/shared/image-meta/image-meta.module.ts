import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ImageMetaComponent} from './image-meta.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [ImageMetaComponent],
    exports: [ImageMetaComponent]
})
export class ImageMetaModule {

}
