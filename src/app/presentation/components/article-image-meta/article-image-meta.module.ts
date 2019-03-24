import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ArticleImageMetaComponent} from './article-image-meta.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [ArticleImageMetaComponent],
    exports: [ArticleImageMetaComponent]
})
export class ArticleImageMetaModule {

}
