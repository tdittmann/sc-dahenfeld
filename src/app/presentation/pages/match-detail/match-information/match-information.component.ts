import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-match-information',
    templateUrl: 'match-information.component.html',
    standalone: false
})
export class MatchInformationComponent {
  @Input() date: string;
  @Input() location: string;
  @Input() fixture: string;
}
