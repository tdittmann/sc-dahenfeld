import { Component, Input } from '@angular/core';
import { MatchEvent } from '../../../../core/domain/matchEvent.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-match-highlight',
  templateUrl: 'match-highlight.component.html',
  styleUrls: ['match-highlight.component.scss'],
  imports: [IonicModule],
})
export class MatchHighlightComponent {
  @Input() event: MatchEvent;
}
