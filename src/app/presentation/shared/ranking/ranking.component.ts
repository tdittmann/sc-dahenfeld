import {Component, Input} from '@angular/core';
import {RankingTeam} from '../../../core/domain/rankingTeam.model';

@Component({
    selector: 'ranking',
    templateUrl: 'ranking.component.html',
    styleUrls: ['ranking.component.scss']
})
export class RankingComponent {

    @Input() teams: RankingTeam[];

}
