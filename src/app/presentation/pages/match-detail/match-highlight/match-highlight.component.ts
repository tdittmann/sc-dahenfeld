import { Component, Input } from '@angular/core';
import { MatchEvent } from '../../../../core/domain/matchEvent.model';

@Component({
    selector: 'app-match-highlight',
    templateUrl: 'match-highlight.component.html',
    styleUrls: ['match-highlight.component.scss'],
    standalone: false
})
export class MatchHighlightComponent {
  @Input() event: MatchEvent;
}
