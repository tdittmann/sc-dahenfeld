import { Component, OnInit, inject } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../../core/domain/person.model';
import { PersonService } from '../../../dataproviders/soccer/person/person.service';
import { TeamDetailStatisticsModalComponent } from '../team-detail/statistics/statistics-modal/team-detail-statistics-modal.component';
import { DevService } from '../../../dataproviders/dev.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { StatisticsCardComponent } from '../../shared/statistics-card/statistics-card.component';
import { CardContainerComponent } from '../../shared/card-container/card-container.component';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  templateUrl: 'person-statistics.page.html',
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, StatisticsCardComponent, CardContainerComponent, BaseChartDirective],
})
export class PersonStatisticsPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly personService = inject(PersonService);
  private readonly modalController = inject(ModalController);
  private readonly devService = inject(DevService);

  heading: string;
  persons: Person[] = [];
  statistics = [
    { heading: 'Spiele', filter: 'careerStatistic.matches' },
    { heading: 'Spiele in der Startelf', filter: 'careerStatistic.starting' },
    { heading: 'Siege', filter: 'careerStatistic.matchesWins' },
    { heading: 'Unentschieden', filter: 'careerStatistic.matchesDraws' },
    { heading: 'Niederlagen', filter: 'careerStatistic.matchesLoses' },
    { heading: 'Erzielte Tore', filter: 'careerStatistic.goals' },
    { heading: 'Gelbe Karten', filter: 'careerStatistic.yellowCards' },
    { heading: 'Gelbe-Rote Karten', filter: 'careerStatistic.yellowRedCards' },
    { heading: 'Platzverweise', filter: 'careerStatistic.redCards' },
    { heading: 'Einwechslungen', filter: 'careerStatistic.cameIn' },
    { heading: 'Auswechslungen', filter: 'careerStatistic.cameOut' },
    { heading: 'Spielminuten', filter: 'careerStatistic.playingMinutes' },
    { heading: 'Spiele ohne Gegentor', filter: 'careerStatistic.matchesWithoutGoalsAgainst' },
    { heading: 'Gefallene Tore', filter: 'careerStatistic.goalsFor' },
    { heading: 'Erhaltene Gegentore', filter: 'careerStatistic.goalsAgainst' },
    { heading: 'Spiele als Kapitän', filter: 'careerStatistic.matchesCaptain' },
  ];

  ageDistributionByAge: ChartData<'bar'> = { labels: [], datasets: [] };
  ageDistributionByYearOfBirthday: ChartData<'bar'> = { labels: [], datasets: [] };
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.personService.loadPersons().subscribe({
      next: (persons) => {
        this.persons = persons.filter((person) => person.careerStatistic.matches !== undefined);

        // Calculates the age statistics
        this.calculateAgeStatistics(this.persons);

        this.isLoading = false;
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
      },
    });
  }

  private calculateAgeStatistics(persons: Person[]) {
    const statisticsByAge: Record<number, number> = {};
    const statisticsByYearOfBirthday: Record<number, number> = {};

    for (let person of persons) {
      if (person.seasonStatistic.matches) {
        statisticsByAge[person.age] = statisticsByAge[person.age] ? statisticsByAge[person.age] + 1 : 1;
        statisticsByYearOfBirthday[person.yearOfBirthday] = statisticsByYearOfBirthday[person.yearOfBirthday]
          ? statisticsByYearOfBirthday[person.yearOfBirthday] + 1
          : 1;
      }
    }

    const backgroundColor = '#960016';
    const statisticsByAgeLabels = [];
    const statisticsByAgeData = [];
    Object.keys(statisticsByAge)
      .sort((keyA, keyB) => keyA.localeCompare(keyB))
      .forEach((key) => {
        statisticsByAgeLabels.push(key);
        statisticsByAgeData.push(statisticsByAge[key]);
      });
    this.ageDistributionByAge = {
      labels: statisticsByAgeLabels,
      datasets: [{ data: statisticsByAgeData, backgroundColor: backgroundColor }],
    };

    const statisticsByYearOfBirthdayLabels = [];
    const statisticsByYearOfBirthdayData = [];
    Object.keys(statisticsByYearOfBirthday)
      .sort((keyA, keyB) => keyA.localeCompare(keyB))
      .forEach((key) => {
        statisticsByYearOfBirthdayLabels.push(key);
        statisticsByYearOfBirthdayData.push(statisticsByYearOfBirthday[key]);
      });
    this.ageDistributionByYearOfBirthday = {
      labels: statisticsByYearOfBirthdayLabels,
      datasets: [{ data: statisticsByYearOfBirthdayData, backgroundColor: backgroundColor }],
    };
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
