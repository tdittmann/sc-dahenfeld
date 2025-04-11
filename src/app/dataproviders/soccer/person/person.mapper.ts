import { Person } from '../../../core/domain/person.model';
import { DateUtils } from '../../../util/DateUtils';
import { PersonStatistic } from '../../../core/domain/personStatistic.model';
import { PersonFactJson, PersonJson, PersonMatchJson, PersonStatisticJson } from './personJson.model';
import { PersonFact } from '../../../core/domain/personFact.model';
import { PersonMatch } from '../../../core/domain/personMatch.model';

export class PersonMapper {
  mapFrom(param: PersonJson): Person {
    if (!param) {
      return null;
    }

    const player = new Person();
    player.id = param.person_id;
    player.showOnFrontend = param.show_on_frontend === '1';
    player.firstname = param.firstname;
    player.lastname = param.lastname;
    player.image = param.image;
    player.position = param.position;
    player.birthday = DateUtils.ofIsoDate(param.birthday);
    player.jerseynumber = parseInt(param.jerseynumber, 10);
    player.facts = this.mapFactsFrom(param.facts);
    player.seasonStatistic = this.mapStatisticFrom(param.seasonStats);
    player.careerStatistic = this.mapStatisticFrom(param.careerStats);
    player.careerMatches = this.mapMatchesFrom(param.careerMatches);
    return player;
  }

  mapFactsFrom(param: PersonFactJson[]): PersonFact[] {
    if (!param) {
      return [];
    }

    return param.map((fact) => new PersonFact(fact.label, fact.value));
  }

  mapStatisticFrom(param: PersonStatisticJson): PersonStatistic {
    const playerStatistic = new PersonStatistic();
    playerStatistic.matches = param.matches;
    playerStatistic.matchesWins = param.matchesWins;
    playerStatistic.matchesDraws = param.matchesDraws;
    playerStatistic.matchesLoses = param.matchesLoses;
    playerStatistic.matchesAsKeeper = param.matchesAsKeeper;
    playerStatistic.starting = param.starting;
    playerStatistic.goals = param.goals;
    playerStatistic.goalsFor = param.goalsFor;
    playerStatistic.goalsAgainst = param.goalsAgainst;
    playerStatistic.goalsAgainstAsKeeper = param.goalsAgainstAsKeeper;
    playerStatistic.matchesWithoutGoalsAgainst = param.matchesWithoutGoalsAgainst;
    playerStatistic.matchesWithoutGoalsAgainstAsKeeper = param.matchesWithoutGoalsAgainstAsKeeper;
    playerStatistic.yellowCards = param.yellowCards;
    playerStatistic.yellowRedCards = param.yellowRedCards;
    playerStatistic.redCards = param.redCards;
    playerStatistic.cameIn = param.cameIn;
    playerStatistic.cameOut = param.cameOut;
    playerStatistic.playingMinutes = param.playingMinutes;
    playerStatistic.statisticHint = param.statistic_hint;
    return playerStatistic;
  }

  mapMatchesFrom(personMatchJsons: PersonMatchJson[]): PersonMatch[] {
    if (!personMatchJsons) {
      return [];
    }

    return personMatchJsons.map((param) => {
      const personMatch = new PersonMatch();
      personMatch.projectId = parseInt(param.projectId, 10);
      personMatch.seasonName = param.seasonName;
      personMatch.leagueName = param.leagueName;
      personMatch.matchId = parseInt(param.matchId, 10);
      personMatch.matchDate = DateUtils.ofUnixTimestampString(param.matchDate);
      personMatch.homeTeamName = param.homeTeamName;
      personMatch.homeImage = param.homeImage;
      personMatch.homeGoals = parseInt(param.homeGoals, 10);
      personMatch.awayTeamName = param.awayTeamName;
      personMatch.awayImage = param.awayImage;
      personMatch.awayGoals = parseInt(param.awayGoals, 10);
      return personMatch;
    });
  }
}
