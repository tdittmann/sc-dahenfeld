import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CostCardComponent } from './cost-card.component';

@NgModule({
  providers: [],
  imports: [CommonModule, IonicModule],
  declarations: [CostCardComponent],
  exports: [CostCardComponent],
})
export class CostCardModule {}
