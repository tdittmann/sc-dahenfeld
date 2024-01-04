import { DynamicContent } from './dynamic-content/dynamic-content.model';

export class TeamInformation {
  name: string;
  showRanking: boolean;
  showFixture: boolean;
  showPlayers: boolean;
  showStatistics: boolean;
  showSeasons: boolean;
  seasons: TeamInformationSeason[] = [];
  overview: DynamicContent[] = [];
}

export class TeamInformationSeason {
  name: string;
  projectId: number;
}
