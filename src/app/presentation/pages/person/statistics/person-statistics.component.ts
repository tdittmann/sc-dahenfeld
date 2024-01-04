import {Component, Input} from '@angular/core';
import {PersonStatistic} from '../../../../core/domain/personStatistic.model';

@Component({
    selector: 'app-person-statistics',
    templateUrl: 'person-statistics.component.html',
    styleUrls: ['person-statistics.component.scss']
})
export class PersonStatisticsComponent {

    @Input() statistics: PersonStatistic;

    numberWithThousandSeparator(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

}
