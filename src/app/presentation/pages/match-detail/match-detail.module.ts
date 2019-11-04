import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {MatchDetailPage} from './match-detail.page';
import {MatchDetailService} from '../../../dataproviders/soccer/match-detail/match-detail.service';

@NgModule({
    providers: [MatchDetailService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
    ],
    declarations: [MatchDetailPage],
    exports: [MatchDetailPage],
    entryComponents: [MatchDetailPage]
})
export class MatchDetailPageModule {

}
