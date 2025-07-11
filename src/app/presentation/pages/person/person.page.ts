import { Component, Input, OnInit, inject } from '@angular/core';
import { PersonService } from '../../../dataproviders/soccer/person/person.service';
import { Person } from '../../../core/domain/person.model';
import { DevService } from '../../../dataproviders/dev.service';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { PersonOverviewComponent } from './overview/person-overview.component';
import { TabsComponent } from '../../shared/tabs/tabs/tabs.component';
import { TabComponent } from '../../shared/tabs/tab/tab.component';
import { PersonFactsComponent } from './facts/person-facts.component';
import { PersonStatisticsComponent } from './statistics/person-statistics.component';
import { PersonMatchesComponent } from './matches/person-matches.component';

@Component({
  templateUrl: 'person.page.html',
  imports: [
    ModalHeaderComponent,
    PageStateComponent,
    IonicModule,
    PersonOverviewComponent,
    TabsComponent,
    TabComponent,
    PersonFactsComponent,
    PersonStatisticsComponent,
    PersonMatchesComponent,
  ],
})
export class PersonPage implements OnInit {
  private readonly playerService = inject(PersonService);
  private readonly devService = inject(DevService);

  @Input() personId: number;
  @Input() projectId = 0;

  person: Person;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.loadPerson(null);
  }

  loadPerson(event) {
    this.playerService.loadPerson(this.personId, this.projectId).subscribe({
      next: (person) => {
        this.person = person;
        this.isLoading = false;
        this.completeEvent(event);
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
        this.completeEvent(event);
      },
    });
  }

  completeEvent(event) {
    if (event) {
      event.target.complete();
    }
  }

  public isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }
}
