export class PersonStatistic {
  /**
   * Number of played matches.
   */
  matches: number;

  /**
   * Number of played matches that were won.
   */
  matchesWins: number;

  /**
   * Number of played matches that were draw.
   */
  matchesDraws: number;

  /**
   * Number of played matches that were loses.
   */
  matchesLoses: number;

  /**
   * Number of played matches as keeper.
   */
  matchesAsKeeper: number;

  /**
   * Number of played matches as captain.
   */
  matchesCaptain: number;

  /**
   * Number of matches the player starts.
   */
  starting: number;

  /**
   * Number of goals of the person.
   */
  goals: number;

  /**
   * Goals the team got against him.
   */
  goalsAgainst: number;

  /**
   * Goals the team scored while the player was on field.
   */
  goalsFor: number;

  /**
   * Goals the person got against him when he was goalkeeper.
   */
  goalsAgainstAsKeeper: number;

  /**
   * Number of matches without any goals against when the player was goalkeeper.
   */
  matchesWithoutGoalsAgainst: number;

  /**
   * Number of matches without any goals against.
   */
  matchesWithoutGoalsAgainstAsKeeper: number;

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
}
