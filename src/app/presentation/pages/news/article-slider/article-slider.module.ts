import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ArticleImageMetaModule} from '../../../shared/article-image-meta/article-image-meta.module';
import {ArticleSliderComponent} from './article-slider.component';
import {SwiperModule} from 'swiper/angular';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        SwiperModule,
        ArticleImageMetaModule
    ],
    declarations: [ArticleSliderComponent],
    exports: [ArticleSliderComponent]
})
export class ArticleSliderModule {

}
