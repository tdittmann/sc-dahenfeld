import {NgModule} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {PageHeaderModule} from '../../components/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {ChroniclePage} from './chronicle.page';
import {TimelineComponent} from '../../components/timeline/timeline.component';
import {TimelineService} from '../../../dataproviders/timeline/timeline.service';

@NgModule({
    providers: [ArticleService, TimelineService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        PageHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: ChroniclePage
            }
        ])
    ],
    declarations: [ChroniclePage, TimelineComponent]
})
export class ChroniclePageModule {

}
