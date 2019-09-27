import {Player} from '../../../core/domain/player.model';
import {PlayerJson} from './playerJson.model';
import {DateUtils} from '../../../util/DateUtils';
import {PlayerStatisticMapper} from './playerStatistic.mapper';

export class PlayerMapper {

    private playerStatisticMapper = new PlayerStatisticMapper();

    mapFrom(param: PlayerJson): Player {
        const player = new Player();
        player.id = param.person_id;
        player.projectId = param.project_id;
        player.teamplayerId = param.teamplayer_id;
        player.firstname = param.firstname;
        player.lastname = param.lastname;
        player.image = param.image;
        player.position = param.position;
        player.age = param.age;
        player.birthday = DateUtils.ofIsoDate(param.birthday);
        player.jerseynumber = parseInt(param.jerseynumber, 10);
        player.seasonStatistic = this.playerStatisticMapper.mapFrom(param.seasonStats);
        player.careerStatistic = this.playerStatisticMapper.mapFrom(param.careerStats);
        return player;
    }

}
