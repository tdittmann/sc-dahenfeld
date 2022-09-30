export interface PersonJson {

    personId: number;
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
    starting: number;
    goals: number;
    goalsAgainst: number;
    matchesWithoutGoalsAgainst: number;
    yellowCards: number;
    yellowRedCards: number;
    redCards: number;
    cameIn: number;
    cameOut: number;
    playingMinutes: number;
    statistic_hint: string;

}
