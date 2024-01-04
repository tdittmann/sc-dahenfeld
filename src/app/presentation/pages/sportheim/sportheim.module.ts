import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SportheimPage } from './sportheim.page';
import { SportheimService } from '../../../dataproviders/sportheim/sportheim.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [SportheimService],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SportheimPage,
      },
    ]),
  ],
  declarations: [SportheimPage],
})
export class SportheimPageModule {}
