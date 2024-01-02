import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-match-card-container',
    templateUrl: 'match-card-container.component.html',
    styleUrls: ['match-card-container.component.scss']
})
export class MatchCardContainerComponent {

    @Input() heading = '';

}
