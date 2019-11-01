import {Component, Input} from '@angular/core';
import {Person} from '../../../../../core/domain/person.model';
import {ModalController} from '@ionic/angular';

@Component({
    templateUrl: 'statistics-modal.component.html',
    styleUrls: ['statistics-modal.component.scss']
})
export class StatisticsModalComponent {

    @Input() heading: string;
    @Input() persons: Person[] = [];
    @Input() filter: string;

    constructor(private modalController: ModalController) {

    }

    public closeModal() {
        return this.modalController.dismiss();
    }

}
