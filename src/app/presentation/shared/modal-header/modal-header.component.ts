import { Component, Input, inject } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal-header',
  templateUrl: 'modal-header.component.html',
  imports: [IonicModule],
})
export class ModalHeaderComponent {
  private readonly modalController = inject(ModalController);

  @Input() title: string;

  public closeModal() {
    return this.modalController.dismiss();
  }
}
