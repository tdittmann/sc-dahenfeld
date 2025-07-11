import { Component, Input, OnInit, inject } from '@angular/core';
import { PersonService } from '../../../../dataproviders/soccer/person/person.service';
import { Person } from '../../../../core/domain/person.model';
import { ModalController } from '@ionic/angular';
import { TeamDetailStatisticsModalComponent } from './statistics-modal/team-detail-statistics-modal.component';
import { DevService } from '../../../../dataproviders/dev.service';
import { PageStateComponent } from '../../../shared/page-state/page-state.component';
import { StatisticsCardComponent } from '../../../shared/statistics-card/statistics-card.component';

@Component({
  selector: 'app-team-detail-statistics',
  templateUrl: 'team-detail-statistics.component.html',
  imports: [PageStateComponent, StatisticsCardComponent],
})
export class TeamDetailStatisticsComponent implements OnInit {
  private readonly personService = inject(PersonService);
  private readonly modalController = inject(ModalController);
  private readonly devService = inject(DevService);

  @Input() projectId = 0;

  persons: Person[] = [];
  statistics = [
    { heading: 'Torschützen', filter: 'seasonStatistic.goals' },
    { heading: 'Spielminuten', filter: 'seasonStatistic.playingMinutes' },
    { heading: 'Gelbe Karten', filter: 'seasonStatistic.yellowCards' },
    { heading: 'Gelb-Rote Karten', filter: 'seasonStatistic.yellowRedCards' },
    { heading: 'Rote Karten', filter: 'seasonStatistic.redCards' },
  ];

  isLoading = true;
  errorMessage = 'Daten konnten nicht geladen werden';
  isError = false;

  ngOnInit(): void {
    if (this.projectId > 0) {
      this.personService.loadPersonsByProjectId(this.projectId).subscribe({
        next: (value) => {
          this.persons = value;

          if (this.persons.length <= 0) {
            this.isError = true;
            this.errorMessage = 'Für diese Spielzeit gibt es keine Statistiken';
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

  openStatisticsModal(statistics) {
    this.modalController
      .create({
        component: TeamDetailStatisticsModalComponent,
        componentProps: {
          persons: this.persons,
          heading: statistics.heading,
          filter: statistics.filter,
        },
      })
      .then((modal) => modal.present());
  }

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }
}
