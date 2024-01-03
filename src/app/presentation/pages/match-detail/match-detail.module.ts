import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {MatchDetailPage} from './match-detail.page';
import {MatchDetailService} from '../../../dataproviders/soccer/match-detail/match-detail.service';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {ModalHeaderModule} from '../../shared/modal-header/modal-header.module';
import {MatchInformationComponent} from './match-information/match-information.component';
import {MatchHighlightsComponent} from './match-highlights/match-highlights.component';
import {MatchLineupComponent} from './match-lineup/match-lineup.component';
import {MatchCardContainerComponent} from './match-card-container/match-card-container.component';
import {MatchHighlightComponent} from './match-highlight/match-highlight.component';
import {TabsModule} from '../../shared/tabs/tabs.module';
import {MatchHeadToHeadComponent} from './match-head-to-head/match-head-to-head.component';
import {MatchCardModule} from '../../shared/match-card/match-card.module';

@NgModule({
    providers: [MatchDetailService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        ModalHeaderModule,
        TabsModule,
        MatchCardModule,
    ],
    declarations: [
        MatchDetailPage,
        MatchCardContainerComponent,
        MatchInformationComponent,
        MatchHighlightsComponent,
        MatchLineupComponent,
        MatchHighlightComponent,
        MatchHeadToHeadComponent,
    ],
    exports: [MatchDetailPage],
})
export class MatchDetailPageModule {

}
