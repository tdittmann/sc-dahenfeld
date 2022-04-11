import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../../../core/domain/person.model';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {StatisticsModalComponent} from '../team-detail/statistics/statistics-modal/statistics-modal.component';

@Component({
    templateUrl: 'person-statistics.page.html',
    styleUrls: ['person-statistics.page.scss']
})
export class PersonStatisticsPage implements OnInit {

    heading: string;
    persons: Person[] = [];
    statistics = [
        {heading: 'Spiele', filter: 'careerStatistic.matches'},
        {heading: 'Spiele in der Startelf', filter: 'careerStatistic.starting'},
        {heading: 'Tore', filter: 'careerStatistic.goals'},
        {heading: 'Gelbe Karten', filter: 'careerStatistic.yellowCards'},
        {heading: 'Gelbe-Rote Karten', filter: 'careerStatistic.yellowRedCards'},
        {heading: 'Platzverweise', filter: 'careerStatistic.redCards'},
        {heading: 'Einwechslungen', filter: 'careerStatistic.cameIn'},
        {heading: 'Auswechslungen', filter: 'careerStatistic.cameOut'},
        {heading: 'Spielminuten', filter: 'careerStatistic.playingMinutes'},
        {heading: 'Spiele ohne Gegentor', filter: 'careerStatistic.matchesWithoutGoalsAgainst'},
        {heading: 'Gegentore', filter: 'careerStatistic.goalsAgainst'},
        {heading: 'Spiele als Kapitän', filter: 'careerStatistic.matchesCaptain'},
    ];

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private personService: PersonService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.personService.loadPersons().subscribe({
            next: (persons) => {
                this.persons = persons.filter(person => person.careerStatistic.matches !== undefined);

                this.isLoading = false;
            },
            error: (error) => {
                this.isError = true;
                console.error(error);
            }
        });
    }

    openStatisticsModal(statistics) {
        this.modalController.create({
            component: StatisticsModalComponent,
            componentProps: {
                'persons': this.persons,
                'heading': statistics.heading,
                'filter': statistics.filter
            }
        }).then(modal => modal.present());
    }

}
