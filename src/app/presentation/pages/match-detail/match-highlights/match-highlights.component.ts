import { Component, Input } from '@angular/core';
import { MatchEvent } from '../../../../core/domain/matchEvent.model';
import { CardContainerComponent } from '../../../shared/card-container/card-container.component';
import { MatchHighlightComponent } from '../match-highlight/match-highlight.component';

@Component({
  selector: 'app-match-highlights',
  templateUrl: 'match-highlights.component.html',
  imports: [CardContainerComponent, MatchHighlightComponent],
})
export class MatchHighlightsComponent {
  @Input() events: MatchEvent[] = [];
}
