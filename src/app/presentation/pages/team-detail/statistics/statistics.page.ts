import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../../../../dataproviders/soccer/person/person.service';
import {Person} from '../../../../core/domain/person.model';
import {ModalController} from '@ionic/angular';
import {StatisticsModalComponent} from './statistics-modal/statistics-modal.component';

@Component({
    selector: 'statistics',
    templateUrl: 'statistics.page.html',
    styleUrls: ['statistics.page.scss']
})
export class StatisticsPage implements OnInit {

    persons: Person[] = [];
    statistics = [
        {heading: 'Torschützen', filter: 'seasonStatistic.goals'},
        {heading: 'Spielminuten', filter: 'seasonStatistic.playingMinutes'},
        {heading: 'Gelbe Karten', filter: 'seasonStatistic.yellowCards'},
        {heading: 'Platzverweise', filter: 'seasonStatistic.redCards'},
    ];

    isLoading = true;
    errorMessage = 'Daten konnten nicht geladen werden';
    isError = false;

    constructor(private route: ActivatedRoute,
                private personService: PersonService,
                private modalController: ModalController) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {

                this.personService.loadPersonsByProjectId(params['id']).subscribe({
                    next:
                        value => {
                            this.persons = value;

                            if (this.persons.length <= 0) {
                                this.isError = true;
                                this.errorMessage = 'Für diese Spielzeit gibt es keine Statistiken';
                            }

                            this.isLoading = false;
                        },
                    error: error => {
                        this.isError = true;
                        console.error(error);
                    }
                });

            }
        );
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
