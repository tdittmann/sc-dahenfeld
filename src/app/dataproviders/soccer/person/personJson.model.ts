export interface PersonJson {
  person_id: number;
  show_on_frontend: string;
  position: string;
  birthday: string;
  jerseynumber: string;
  firstname: string;
  lastname: string;
  image: string;

  facts: PersonFactJson[];
  seasonStats: PersonStatisticJson;
  careerStats: PersonStatisticJson;
  careerMatches: PersonMatchJson[];
}

export interface PersonFactJson {
  label: string;
  value: string;
}

export interface PersonStatisticJson {
  matches: number;
  matchesWins: number;
  matchesDraws: number;
  matchesLoses: number;
  matchesAsKeeper: number;
  matchesCaptain: number;
  starting: number;
  goals: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsAgainstAsKeeper: number;
  matchesWithoutGoalsAgainst: number;
  matchesWithoutGoalsAgainstAsKeeper: number;
  yellowCards: number;
  yellowRedCards: number;
  redCards: number;
  cameIn: number;
  cameOut: number;
  playingMinutes: number;
  statistic_hint: string;
}

export interface PersonMatchJson {
  projectId: string;
  seasonName: string;
  leagueName: string;
  matchId: string;
  matchDate: string;
  homeTeamName: string;
  homeImage: string;
  homeGoals: string;
  awayTeamName: string;
  awayImage: string;
  awayGoals: string;
}
