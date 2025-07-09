import { Component, OnInit } from '@angular/core';
import { PersonPage } from '../person/person.page';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../../core/domain/person.model';
import { PersonService } from '../../../dataproviders/soccer/person/person.service';

@Component({
    templateUrl: 'birthdays.page.html',
    styleUrls: ['birthdays.page.scss'],
    standalone: false
})
export class BirthdaysPage implements OnInit {
  heading: string;
  persons: Person[] = [];
  filter = '';

  isLoading = true;
  isError = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService,
    private modalController: ModalController,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.personService.loadPersons().subscribe({
      next: (persons) => {
        this.persons = persons;
        this.isLoading = false;
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
      },
    });
  }

  openPerson(personId: number) {
    this.modalController
      .create({
        component: PersonPage,
        componentProps: {
          personId: personId,
        },
      })
      .then((modal) => modal.present());
  }
}
