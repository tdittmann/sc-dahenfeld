import {TeamInformationJson, TeamInformationSeasonJson} from './teamInformationJson.model';
import {TeamInformation, TeamInformationSeason} from '../../core/domain/teamInformation.model';

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
        teamInformation.showSeasons = param.showSeasons;

        if (param.seasons) {
            for (let i = 0; i < param.seasons.length; i++) {
                teamInformation.seasons.push(this.mapFromSeason(param.seasons[i]));
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
