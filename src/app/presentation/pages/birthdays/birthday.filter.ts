import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../../../core/domain/person.model';

@Pipe({
    name: 'birthdayFilter',
    pure: false,
    standalone: false
})
export class BirthdayFilterPipe implements PipeTransform {
  transform(pItems: Person[], pSearchTerm): Person[] {
    return pSearchTerm
      ? pItems.filter((person) => {
          // Filter by name and upcoming age
          return (
            person.name.toLowerCase().indexOf(pSearchTerm.toLowerCase()) !== -1 || (person.age + 1).toString().indexOf(pSearchTerm) !== -1
          );
        })
      : pItems;
  }
}
