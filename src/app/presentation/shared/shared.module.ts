import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CardContainerComponent} from './card-container/card-container.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {PageStateComponent} from './page-state/page-state.component';
import {TabsComponent} from './tabs/tabs/tabs.component';
import {TabComponent} from './tabs/tab/tab.component';
import {RouterModule} from '@angular/router';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    declarations: [
        CardContainerComponent,
        PageHeaderComponent,
        PageStateComponent,
        TabsComponent,
        TabComponent,
    ],
    exports: [
        CardContainerComponent,
        PageHeaderComponent,
        PageStateComponent,
        TabsComponent,
        TabComponent,
    ]
})
export class SharedModule {
}
