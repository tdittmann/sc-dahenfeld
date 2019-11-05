import {NgModule} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {ChroniclePage} from './chronicle.page';
import {TimelineComponent} from './timeline/timeline.component';
import {TimelineService} from '../../../dataproviders/timeline/timeline.service';
import {PageStateModule} from '../../shared/page-state/page-state.module';

@NgModule({
    providers: [ArticleService, TimelineService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: ChroniclePage
            }
        ]),
        PageStateModule
    ],
    declarations: [ChroniclePage, TimelineComponent]
})
export class ChroniclePageModule {

}
