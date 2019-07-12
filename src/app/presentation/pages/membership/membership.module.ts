import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../components/page-header/page-header.module';
import {RouterModule} from '@angular/router';
import {MembershipPage} from './membership.page';
import {MembershipService} from '../../../dataproviders/membership/membership.service';
import {HttpClientModule} from '@angular/common/http';
import {ArticleDetailModule} from '../../components/article-detail/article-detail.module';
import {CostCardModule} from '../../components/cost-card/cost-card.module';

@NgModule({
    providers: [MembershipService],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PageHeaderModule,
        HttpClientModule,
        ArticleDetailModule,
        CostCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: MembershipPage
            }
        ])
    ],
    declarations: [MembershipPage]
})
export class MembershipPageModule {
}
