import { Component, OnInit, inject } from '@angular/core';
import { PersonPage } from '../person/person.page';
import { ModalController, IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../../core/domain/person.model';
import { PersonService } from '../../../dataproviders/soccer/person/person.service';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { FormsModule } from '@angular/forms';
import { CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf } from '@angular/cdk/scrolling';
import { OrderPipe } from '../../shared/order-pipe/order.pipe';
import { BirthdayFilterPipe } from './birthday.filter';

@Component({
  templateUrl: 'birthdays.page.html',
  styleUrls: ['birthdays.page.scss'],
  imports: [
    PageHeaderComponent,
    PageStateComponent,
    IonicModule,
    FormsModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    OrderPipe,
    BirthdayFilterPipe,
  ],
})
export class BirthdaysPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly personService = inject(PersonService);
  private readonly modalController = inject(ModalController);

  heading: string;
  persons: Person[] = [];
  filter = '';

  isLoading = true;
  isError = false;

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
