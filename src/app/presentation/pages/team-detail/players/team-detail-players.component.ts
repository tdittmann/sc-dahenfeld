import { Component, Input, OnInit, inject } from '@angular/core';
import { PersonService } from '../../../../dataproviders/soccer/person/person.service';
import { Person } from '../../../../core/domain/person.model';
import { ModalController } from '@ionic/angular';
import { PersonPage } from '../../person/person.page';
import { DevService } from '../../../../dataproviders/dev.service';
import { GroupByUtils } from '../../../../util/GroupByUtils';
import { PageStateComponent } from '../../../shared/page-state/page-state.component';
import { CardContainerComponent } from '../../../shared/card-container/card-container.component';
import { ListItemComponent } from '../../../shared/list-item/list-item.component';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-team-detail-players',
  templateUrl: 'team-detail-players.component.html',
  imports: [PageStateComponent, CardContainerComponent, ListItemComponent, KeyValuePipe],
})
export class TeamDetailPlayersComponent implements OnInit {
  private readonly playerService = inject(PersonService);
  private readonly modalController = inject(ModalController);
  private readonly devService = inject(DevService);

  @Input() projectId: number;

  players: Map<string, Person[]> = new Map<string, Person[]>();

  isLoading = true;
  errorMessage = 'Daten konnten nicht geladen werden';
  isError = false;

  ngOnInit(): void {
    if (this.projectId > 0) {
      this.playerService.loadPersonsByProjectId(this.projectId).subscribe({
        next: (players) => {
          this.players = GroupByUtils.groupBy(players, (player) => player.position);

          if (this.players.size <= 0) {
            this.isError = true;
            this.errorMessage = 'Für diese Spielzeit gibt es keinen Kader';
          }

          this.isLoading = false;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        },
      });
    }
  }

  public openPlayer(personId: number) {
    this.modalController
      .create({
        component: PersonPage,
        componentProps: {
          personId: personId,
          projectId: this.projectId,
        },
      })
      .then((modal) => modal.present());
  }

  returnZero() {
    return 0;
  }

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }
}
