export class TeamInformation {

    name: string;
    showRanking: boolean;
    showFixture: boolean;
    showPlayers: boolean;
    showStatistics: boolean;
    showSeasons: boolean;
    seasons: TeamInformationSeason[] = [];

}

export class TeamInformationSeason {

    name: string;
    projectId: number;

}
