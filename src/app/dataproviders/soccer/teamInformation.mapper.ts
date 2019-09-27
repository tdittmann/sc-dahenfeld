import {TeamInformationJson} from './teamInformationJson.model';
import {TeamInformation} from '../../core/domain/teamInformation.model';

export class TeamInformationMapper {

    mapFrom(param: TeamInformationJson): TeamInformation {
        const teamInformation = new TeamInformation();
        teamInformation.name = param.name;
        return teamInformation;
    }

}
