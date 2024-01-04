import { NgModule } from '@angular/core';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ChroniclePage } from './chronicle.page';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineService } from '../../../dataproviders/timeline/timeline.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [ArticleService, TimelineService],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChroniclePage,
      },
    ]),
    SharedModule,
  ],
  declarations: [ChroniclePage, TimelineComponent],
})
export class ChroniclePageModule {}
