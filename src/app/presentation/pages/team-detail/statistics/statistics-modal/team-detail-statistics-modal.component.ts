import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../../../core/domain/person.model';
import { ModalHeaderComponent } from '../../../../shared/modal-header/modal-header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from '../../../../shared/list-item/list-item.component';
import { OrderPipe } from '../../../../shared/order-pipe/order.pipe';
import { PersonFilter } from './person.filter';

@Component({
  selector: 'app-team-detail-statistics-modal',
  templateUrl: 'team-detail-statistics-modal.component.html',
  imports: [ModalHeaderComponent, IonicModule, FormsModule, ListItemComponent, OrderPipe, PersonFilter],
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
