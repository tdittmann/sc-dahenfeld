import { Injectable, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {
  private readonly toastCtrl = inject(ToastController);

  private static readonly DEFAULT_DURATION = 3000;

  public async showToast(pMessage: string) {
    const toast = await this.toastCtrl.create({
      message: pMessage,
      duration: ToastService.DEFAULT_DURATION,
    });

    toast.present();
  }
}
