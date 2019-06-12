import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable()
export class ToastService {

    private static DEFAULT_DURATION = 3000;

    constructor(private toastCtrl: ToastController) {

    }

    public async showToast(pMessage: string) {
        const toast = await this.toastCtrl.create({
            message: pMessage,
            duration: ToastService.DEFAULT_DURATION
        });

        toast.present();
    }

}
