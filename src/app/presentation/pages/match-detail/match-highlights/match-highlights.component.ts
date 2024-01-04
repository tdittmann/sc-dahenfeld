import { Component, Input } from '@angular/core';
import { MatchEvent } from '../../../../core/domain/matchEvent.model';

@Component({
  selector: 'app-match-highlights',
  templateUrl: 'match-highlights.component.html',
})
export class MatchHighlightsComponent {
  @Input() events: MatchEvent[] = [];
}
