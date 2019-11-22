export interface TeamInformationJson {

    name: string;
    showRanking: boolean;
    showFixture: boolean;
    showPlayers: boolean;
    showStatistics: boolean;
    showSeasons: boolean;
    seasons: TeamInformationSeasonJson[];

}

export interface TeamInformationSeasonJson {

    name: string;
    id: string;

}
