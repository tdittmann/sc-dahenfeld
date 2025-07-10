import { Component, Input } from '@angular/core';
import { Person } from '../../../../core/domain/person.model';
import { DevService } from '../../../../dataproviders/dev.service';

@Component({
    selector: 'app-person-overview',
    templateUrl: 'person-overview.component.html',
    styleUrls: ['person-overview.component.scss'],
    standalone: false
})
export class PersonOverviewComponent {
  @Input() person: Person;

  constructor(private devService: DevService) {}

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }
}
