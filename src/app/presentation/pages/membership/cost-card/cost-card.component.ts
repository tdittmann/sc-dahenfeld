import {Component, Input} from '@angular/core';

@Component({
    selector: 'cost-card',
    templateUrl: 'cost-card.component.html',
    styleUrls: ['cost-card.component.scss']
})
export class CostCardComponent {

    @Input() title: string;
    @Input() content: string;
    @Input() footer: string;

}
