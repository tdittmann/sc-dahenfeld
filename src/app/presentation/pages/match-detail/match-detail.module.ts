import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {MatchDetailPage} from './match-detail.page';
import {MatchDetailService} from '../../../dataproviders/soccer/match-detail/match-detail.service';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {ModalHeaderModule} from '../../shared/modal-header/modal-header.module';

@NgModule({
    providers: [MatchDetailService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        ModalHeaderModule,
    ],
    declarations: [MatchDetailPage],
    exports: [MatchDetailPage],
})
export class MatchDetailPageModule {

}
