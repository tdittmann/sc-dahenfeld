import {DynamicContentJson} from '../dynamic-content/dynamic-content-json.model';

export interface TeamInformationJson {

    name: string;
    showRanking: boolean;
    showFixture: boolean;
    showPlayers: boolean;
    showStatistics: boolean;
    showSeasons: boolean;
    seasons: TeamInformationSeasonJson[];
    overview: DynamicContentJson[];

}

export interface TeamInformationSeasonJson {

    name: string;
    id: string;

}
