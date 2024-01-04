import { MatchPlayer } from './matchPlayer.model';

describe('MatchPlayer', () => {
  it('should return the name', () => {
    const matchPlayer = new MatchPlayer();
    matchPlayer.firstname = 'Hello';
    matchPlayer.lastname = 'World';

    expect(matchPlayer.name).toBe('Hello World');
  });

  it('should sort a player by position, jersey number and lastname', () => {
    const player1 = createPlayer('Thomas', 'Mustermann', 1, 'Torhüter');
    const player2 = createPlayer('Thomas', 'Nustermann', 1, 'Torhüter');
    const player3 = createPlayer('Thomas', 'Oustermann', 2, 'Torhüter');

    const player4 = createPlayer('Thomas', 'Amann', 2, 'Abwehr');
    const player5 = createPlayer('Thomas', 'Bmann', 2, 'Abwehr');
    const player6 = createPlayer('Thomas', 'CMann', 2, 'Abwehr');
    const player7 = createPlayer('Thomas', 'CMann', 2, 'Abwehr');

    const actual = [player2, player5, player7, player1, player4, player6, player3].sort((a, b) => a.compareTo(b));

    const expected = [player1, player2, player3, player4, player5, player6, player7];
    expect(actual).toEqual(expected);
  });

  function createPlayer(firstname: string, lastname: string, jerseyNumber: number, position: string): MatchPlayer {
    const matchPlayer = new MatchPlayer();
    matchPlayer.firstname = firstname;
    matchPlayer.lastname = lastname;
    matchPlayer.jerseynumber = jerseyNumber;
    matchPlayer.position = position;
    return matchPlayer;
  }
});
