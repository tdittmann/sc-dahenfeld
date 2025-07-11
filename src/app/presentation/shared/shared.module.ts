import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from './card-container/card-container.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageStateComponent } from './page-state/page-state.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { RouterModule } from '@angular/router';
import { OrderPipe } from './order-pipe/order.pipe';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  providers: [OrderPipe],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    CardContainerComponent,
    ListItemComponent,
    PageHeaderComponent,
    PageStateComponent,
    TabsComponent,
    TabComponent,
    OrderPipe,
  ],
  exports: [CardContainerComponent, ListItemComponent, PageHeaderComponent, PageStateComponent, TabsComponent, TabComponent, OrderPipe],
})
export class SharedModule {}
