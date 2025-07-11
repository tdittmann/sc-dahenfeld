import { Component, Input } from '@angular/core';
import { RankingTeam } from '../../../core/domain/rankingTeam.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.component.html',
  styleUrls: ['ranking.component.scss'],
  imports: [NgClass],
})
export class RankingComponent {
  @Input() teams: RankingTeam[];
}
