import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {MembershipPage} from './membership.page';
import {MembershipService} from '../../../dataproviders/membership/membership.service';
import {ArticleDetailModule} from '../../shared/article-detail/article-detail.module';
import {CostCardModule} from './cost-card/cost-card.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';

@NgModule({
    providers: [MembershipService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        ArticleDetailModule,
        CostCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: MembershipPage
            }
        ]),
        PageStateModule
    ],
    declarations: [MembershipPage]
})
export class MembershipPageModule {
}
