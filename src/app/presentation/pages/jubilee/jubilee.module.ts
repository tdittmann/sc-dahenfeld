import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PageHeaderModule} from '../../shared/page-header/page-header.module';
import {PageStateModule} from '../../shared/page-state/page-state.module';
import {JubileePage} from './jubilee.page';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {EventCardModule} from '../../shared/event-card/event-card.module';
import {ArticleCardModule} from '../../shared/article-card/article-card.module';

@NgModule({
    providers: [CalendarService, ArticleService],
    imports: [
        CommonModule,
        IonicModule,
        PageHeaderModule,
        PageStateModule,
        EventCardModule,
        ArticleCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: JubileePage,
            }
        ])
    ],
    declarations: [JubileePage]
})
export class JubileePageModule {

}
