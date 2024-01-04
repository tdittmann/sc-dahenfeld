import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../../../../dataproviders/soccer/person/person.service';
import { Person } from '../../../../core/domain/person.model';
import { ModalController } from '@ionic/angular';
import { TeamDetailStatisticsModalComponent } from './statistics-modal/team-detail-statistics-modal.component';

@Component({
  selector: 'app-team-detail-statistics',
  templateUrl: 'team-detail-statistics.component.html',
})
export class TeamDetailStatisticsComponent implements OnInit {
  @Input() projectId = 0;

  persons: Person[] = [];
  statistics = [
    { heading: 'Torschützen', filter: 'seasonStatistic.goals' },
    { heading: 'Spielminuten', filter: 'seasonStatistic.playingMinutes' },
    { heading: 'Gelbe Karten', filter: 'seasonStatistic.yellowCards' },
    { heading: 'Platzverweise', filter: 'seasonStatistic.redCards' },
  ];

  isLoading = true;
  errorMessage = 'Daten konnten nicht geladen werden';
  isError = false;

  constructor(
    private personService: PersonService,
    private modalController: ModalController,
  ) {}

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
}
