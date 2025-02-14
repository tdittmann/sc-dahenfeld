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
  matchesAsKeeper: number;
  starting: number;
  goals: number;
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

export  interface PersonMatchJson {
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
