import { Component, Input } from '@angular/core';
import { MatchPlayer } from '../../../../core/domain/matchPlayer.model';
import { MatchEvent } from '../../../../core/domain/matchEvent.model';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from '../../../shared/card-container/card-container.component';
import { ListItemComponent } from '../../../shared/list-item/list-item.component';
import { MatchHighlightComponent } from '../match-highlight/match-highlight.component';

@Component({
  selector: 'app-match-lineup',
  templateUrl: 'match-lineup.component.html',
  styleUrls: ['match-lineup.component.scss'],
  imports: [IonicModule, CardContainerComponent, ListItemComponent, MatchHighlightComponent],
})
export class MatchLineupComponent {
  @Input() lineup: MatchPlayer[] = [];

  @Input() substitutions: MatchEvent[] = [];
}
