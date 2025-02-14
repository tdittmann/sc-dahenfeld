export class FavoriteTeamUtil {
  public static isFavoriteTeam(teamName: string): boolean {
    return teamName.includes('Dahenfeld') || teamName.includes('Kochertal');
  }
}