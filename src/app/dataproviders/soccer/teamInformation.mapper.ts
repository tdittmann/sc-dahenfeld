import {TeamInformationJson} from './teamInformationJson.model';
import {TeamInformation} from '../../core/domain/teamInformation.model';

export class TeamInformationMapper {

    mapFrom(param: TeamInformationJson): TeamInformation {
        if (!param) {
            return null;
        }

        const teamInformation = new TeamInformation();
        teamInformation.name = param.name;
        teamInformation.showRanking = param.showRanking;
        teamInformation.showFixture = param.showFixture;
        teamInformation.showPlayers = param.showPlayers;
        teamInformation.showStatistics = param.showStatistics;
        return teamInformation;
    }

}
