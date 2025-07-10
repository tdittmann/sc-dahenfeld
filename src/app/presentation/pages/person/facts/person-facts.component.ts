import { Component, Input } from '@angular/core';
import { PersonFact } from '../../../../core/domain/personFact.model';

@Component({
    selector: 'app-person-facts',
    templateUrl: 'person-facts.component.html',
    standalone: false
})
export class PersonFactsComponent {
  @Input() facts: PersonFact[] = [];
}
