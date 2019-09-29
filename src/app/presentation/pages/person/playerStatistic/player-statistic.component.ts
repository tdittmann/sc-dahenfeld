import {Component, Input} from '@angular/core';

@Component({
    selector: 'player-statistic',
    templateUrl: 'player-statistic.component.html',
    styleUrls: ['player-statistic.component.scss']
})
export class PlayerStatisticComponent {

    @Input() text: string;
    @Input() seasonValue: number;
    @Input() careerValue: number;

    constructor() {

    }

}
