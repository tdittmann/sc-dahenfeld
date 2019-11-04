import {Component, Input} from '@angular/core';
import {CalendarEvent} from '../../../core/domain/calendarEvent.model';
import {ModalController} from '@ionic/angular';

@Component({
    templateUrl: 'event-detail.page.html',
    styleUrls: ['event-detail.page.scss']
})
export class EventDetailPage {

    @Input() event: CalendarEvent;

    constructor(private modalController: ModalController) {

    }

    public closeModal() {
        return this.modalController.dismiss();
    }

}
