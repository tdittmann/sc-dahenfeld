import { Component, Input, inject } from '@angular/core';
import { Person } from '../../../../core/domain/person.model';
import { DevService } from '../../../../dataproviders/dev.service';
import { NgStyle } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-person-overview',
  templateUrl: 'person-overview.component.html',
  styleUrls: ['person-overview.component.scss'],
  imports: [NgStyle, IonicModule],
})
export class PersonOverviewComponent {
  private readonly devService = inject(DevService);

  @Input() person: Person;

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }
}
