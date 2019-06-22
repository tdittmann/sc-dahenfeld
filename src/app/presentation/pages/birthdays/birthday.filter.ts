import {Pipe, PipeTransform} from '@angular/core';
import {Birthday} from '../../../core/domain/birthday.model';

@Pipe({
    name: 'birthdayFilter',
    pure: false
})
export class BirthdayFilterPipe implements PipeTransform {
    transform(pItems: Birthday[], pSearchTerm): Birthday[] {
        return pSearchTerm
            ? pItems.filter(pBirthday => {
                // Filter by name and upcoming age
                return pBirthday.getName().toLowerCase().indexOf(pSearchTerm.toLowerCase()) !== -1 ||
                    (pBirthday.getAge() + 1).toString().indexOf(pSearchTerm) !== -1;
            })
            : pItems;
    }
}
