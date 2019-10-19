export interface PlayerJson {

    person_id: number;
    position: string;
    birthday: string;
    jerseynumber: string;
    firstname: string;
    lastname: string;
    image: string;

    seasonStats: PlayerStatisticJson;
    careerStats: PlayerStatisticJson;

}

export interface PlayerStatisticJson {

    matches: number;
    starting: number;
    goals: number;
    yellowCards: number;
    yellowRedCards: number;
    redCards: number;
    cameIn: number;
    cameOut: number;
    playingMinutes: number;

}
