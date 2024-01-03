import {Component, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modal-header',
    templateUrl: 'modal-header.component.html',
    styleUrls: ['modal-header.component.scss']
})
export class ModalHeaderComponent {

    @Input() title: string;

    constructor(private modalController: ModalController) {

    }

    public closeModal() {
        return this.modalController.dismiss();
    }

}
