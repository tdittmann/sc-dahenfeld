import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../../../../core/domain/person.model';
import {PersonPage} from '../../../person/person.page';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'statistics-item',
    templateUrl: 'statistics-item.component.html',
    styleUrls: ['statistics-item.component.scss']
})
export class StatisticsItemComponent implements OnInit {

    @Input() person: Person;
    @Input() filter: string;
    @Input() openPersonOnClick = false;

    statisticsVariable: string;
    fieldVariable: string;

    constructor(private modalController: ModalController) {

    }

    ngOnInit(): void {
        const splitted = this.filter.split('.');
        this.statisticsVariable = splitted[0];
        this.fieldVariable = splitted[1];
    }

    public openPlayer(personId: number) {
        if (this.openPersonOnClick) {
            this.modalController.create({
                component: PersonPage,
                componentProps: {
                    'personId': personId
                }
            }).then(modal => modal.present());
        }
    }

}
