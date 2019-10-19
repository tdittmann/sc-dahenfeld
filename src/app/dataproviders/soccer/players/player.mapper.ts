import {Player} from '../../../core/domain/player.model';
import {PlayerJson, PlayerStatisticJson} from './playerJson.model';
import {DateUtils} from '../../../util/DateUtils';
import {PlayerStatistic} from '../../../core/domain/playerStatistic.model';

// TODO tdit0703: Tests
export class PlayerMapper {

    mapFrom(param: PlayerJson): Player {
        const player = new Player();
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

    mapStatisticFrom(param: PlayerStatisticJson): PlayerStatistic {
        const playerStatistic = new PlayerStatistic();
        playerStatistic.matches = param.matches;
        playerStatistic.starting = param.starting;
        playerStatistic.goals = param.goals;
        playerStatistic.yellowCards = param.yellowCards;
        playerStatistic.yellowRedCards = param.yellowRedCards;
        playerStatistic.redCards = param.redCards;
        playerStatistic.cameIn = param.cameIn;
        playerStatistic.cameOut = param.cameOut;
        playerStatistic.playingMinutes = param.playingMinutes;
        return playerStatistic;
    }

}
