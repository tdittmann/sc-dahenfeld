import {PlayerStatisticJson} from './playerStatisticJson.model';
import {PlayerStatistic} from '../../../core/domain/playerStatistic.model';
import {Mapper} from '../../../core/base/mapper';

export class PlayerStatisticMapper implements Mapper<PlayerStatisticJson, PlayerStatistic> {

    mapFrom(param: PlayerStatisticJson): PlayerStatistic {
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

    mapTo(param: PlayerStatistic): PlayerStatisticJson {
        return undefined;
    }


}
