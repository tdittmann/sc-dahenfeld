export interface PersonJson {
  person_id: number;
  position: string;
  birthday: string;
  jerseynumber: string;
  firstname: string;
  lastname: string;
  image: string;

  seasonStats: PersonStatisticJson;
  careerStats: PersonStatisticJson;
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
