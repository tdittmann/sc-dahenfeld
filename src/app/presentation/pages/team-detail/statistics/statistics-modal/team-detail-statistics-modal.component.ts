import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../../../core/domain/person.model';

@Component({
    selector: 'app-team-detail-statistics-modal',
    templateUrl: 'team-detail-statistics-modal.component.html',
    standalone: false
})
export class TeamDetailStatisticsModalComponent implements OnInit {
  @Input() searchFilter: string;
  @Input() heading: string;
  @Input() persons: Person[] = [];
  @Input() filter: string;

  statisticsVariable: string;
  fieldVariable: string;

  ngOnInit(): void {
    const splitted = this.filter.split('.');
    this.statisticsVariable = splitted[0];
    this.fieldVariable = splitted[1];
  }
}
