import {Pipe, PipeTransform} from '@angular/core';
import {Person} from '../../../core/domain/person.model';

@Pipe({
    name: 'personFilter',
    pure: false
})
export class PersonFilter implements PipeTransform {
    transform(pItems: Person[], pSearchTerm): Person[] {
        return pSearchTerm
            ? pItems.filter(person => {
                return person.name.toLowerCase().indexOf(pSearchTerm.toLowerCase()) !== -1;
            })
            : pItems;
    }
}
