import { Component, Input, OnInit } from '@angular/core';
import { PersonMatch } from '../../../../core/domain/personMatch.model';
import { GroupByUtils } from '../../../../util/GroupByUtils';
import { MatchDetailPage } from '../../match-detail/match-detail.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-person-matches',
  templateUrl: 'person-matches.component.html',
  styleUrls: ['person-matches.component.scss'],
})
export class PersonMatchesComponent implements OnInit {
  @Input() matches: PersonMatch[];

  seasonMatches: Map<string, PersonMatch[]> = new Map<string, PersonMatch[]>();

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    const sortedMatchesBySeasonDesc = this.matches.sort((a, b) => {
      if (a.seasonName !== b.seasonName) {
        return b.seasonName.localeCompare(a.seasonName);
      }
      return a.matchDate.diff(b.matchDate);
    });
    this.seasonMatches = GroupByUtils.groupBy(sortedMatchesBySeasonDesc, (match: PersonMatch) => match.seasonName);
  }

  // Needed because otherwise the keyvalue pipe is sorting our map again in wrong order.
  returnZero() {
    return 0;
  }

  public openMatchDetail(matchId) {
    this.modalController
      .create({
        component: MatchDetailPage,
        componentProps: {
          matchId: matchId,
        },
      })
      .then((modal) => modal.present());
  }
}
