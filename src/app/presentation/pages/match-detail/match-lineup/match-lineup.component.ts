import { Component, Input } from '@angular/core';
import { MatchPlayer } from '../../../../core/domain/matchPlayer.model';
import { MatchEvent } from '../../../../core/domain/matchEvent.model';

@Component({
  selector: 'app-match-lineup',
  templateUrl: 'match-lineup.component.html',
  styleUrls: ['match-lineup.component.scss'],
})
export class MatchLineupComponent {
  @Input() lineup: MatchPlayer[] = [];

  @Input() substitutions: MatchEvent[] = [];
}
