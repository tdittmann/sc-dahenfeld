import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-match-information',
    templateUrl: 'match-information.component.html',
    styleUrls: ['match-information.component.scss'],
})
export class MatchInformationComponent {

    @Input() date: string;
    @Input() location: string;
    @Input() fixture: string;

}
