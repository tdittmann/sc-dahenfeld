export class PersonStatistic {

    /**
     * Number of played matches.
     */
    matches: number;

    /**
     * Number of matches the player starts.
     */
    starting: number;

    /**
     * Number of goals.
     */
    goals: number;

    /**
     * Goals the person got against him when he was goalkeeper.
     */
    goalsAgainst: number;

    /**
     * Number of matches without any goals against when the player was goalkeeper.
     */
    matchesWithoutGoalsAgainst: number;

    /**
     * Number of yellow cards.
     */
    yellowCards: number;

    /**
     * Number of yellow red cards.
     */
    yellowRedCards: number;

    /**
     * Number of red cards.
     */
    redCards: number;

    /**
     * Number matches the person came in.
     */
    cameIn: number;

    /**
     * Number of matches the person goes out.
     */
    cameOut: number;

    /**
     * Total number of played minutes.
     */
    playingMinutes: number;

    /**
     * Hint of the statistic.
     */
    statisticHint: string;

    constructor() {

    }

}
