import {Person} from '../../../core/domain/person.model';
import {DateUtils} from '../../../util/DateUtils';
import {PersonStatistic} from '../../../core/domain/personStatistic.model';
import {PersonJson, PersonStatisticJson} from './personJson.model';

export class PersonMapper {

    mapFrom(param: PersonJson): Person {
        if (!param) {
            return null;
        }

        const player = new Person();
        player.id = param.person_id;
        player.firstname = param.firstname;
        player.lastname = param.lastname;
        player.image = param.image;
        player.position = param.position;
        player.birthday = DateUtils.ofIsoDate(param.birthday);
        player.jerseynumber = parseInt(param.jerseynumber, 10);
        player.seasonStatistic = this.mapStatisticFrom(param.seasonStats);
        player.careerStatistic = this.mapStatisticFrom(param.careerStats);
        return player;
    }

    mapStatisticFrom(param: PersonStatisticJson): PersonStatistic {
        if (!param) {
            return null;
        }

        const playerStatistic = new PersonStatistic();
        playerStatistic.matches = param.matches;
        playerStatistic.starting = param.starting;
        playerStatistic.goals = param.goals;
        playerStatistic.yellowCards = param.yellowCards;
        playerStatistic.yellowRedCards = param.yellowRedCards;
        playerStatistic.redCards = param.redCards;
        playerStatistic.cameIn = param.cameIn;
        playerStatistic.cameOut = param.cameOut;
        playerStatistic.playingMinutes = param.playingMinutes;
        playerStatistic.statisticHint = param.statistic_hint;
        return playerStatistic;
    }

}
