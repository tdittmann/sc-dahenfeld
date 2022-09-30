export class TeamInformation {

    name: string;
    showRanking: boolean;
    showFixture: boolean;
    showPlayers: boolean;
    showStatistics: boolean;
    showSeasons: boolean;
    articleId: string;
    seasons: TeamInformationSeason[] = [];

}

export class TeamInformationSeason {

    name: string;
    projectId: number;

}
