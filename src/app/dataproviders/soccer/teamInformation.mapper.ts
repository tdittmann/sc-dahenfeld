import {TeamInformationJson, TeamInformationSeasonJson} from './teamInformationJson.model';
import {TeamInformation, TeamInformationSeason} from '../../core/domain/teamInformation.model';
import {DynamicContentMapper} from '../dynamic-content/dynamic-content.mapper';

export class TeamInformationMapper {

    private _dynamicContentMapper = new DynamicContentMapper();

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
        teamInformation.showSeasons = param.showSeasons;
        if (param.overview) {
            teamInformation.overview = param.overview.map(value => this._dynamicContentMapper.mapFrom(value));
        }

        if (param.seasons) {
            for (const element of param.seasons) {
                teamInformation.seasons.push(this.mapFromSeason(element));
            }

            // Now order seasons descending by name
            teamInformation.seasons.sort((a, b) => b.name.localeCompare(a.name));
        }

        return teamInformation;
    }

    mapFromSeason(param: TeamInformationSeasonJson): TeamInformationSeason {
        if (!param) {
            return null;
        }

        const teamInformationSeason: TeamInformationSeason = new TeamInformationSeason();
        teamInformationSeason.name = param.name;
        teamInformationSeason.projectId = parseInt(param.id, 10);
        return teamInformationSeason;
    }

}
