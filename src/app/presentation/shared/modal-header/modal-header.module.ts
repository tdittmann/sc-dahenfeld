import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from './modal-header.component';

@NgModule({
  providers: [],
  imports: [CommonModule, IonicModule],
  declarations: [ModalHeaderComponent],
  exports: [ModalHeaderComponent],
})
export class ModalHeaderModule {}
