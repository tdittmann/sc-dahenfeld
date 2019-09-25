import {Mapper} from '../../core/base/mapper';
import {TeamInformationJson} from './teamInformationJson.model';
import {TeamInformation} from '../../core/domain/teamInformation.model';

export class TeamInformationMapper implements Mapper<TeamInformationJson, TeamInformation> {

    mapFrom(param: TeamInformationJson): TeamInformation {
        const teamInformation = new TeamInformation();
        teamInformation.name = param.name;
        return teamInformation;
    }

    mapTo(param: TeamInformation): TeamInformationJson {
        return {
            name: param.name
        };
    }

}
