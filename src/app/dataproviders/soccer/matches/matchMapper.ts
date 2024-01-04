import { MatchJson } from './matchJson.model';
import { Match } from '../../../core/domain/match.model';
import { DateUtils } from '../../../util/DateUtils';

export class MatchMapper {
  mapFrom(param: MatchJson): Match {
    if (!param) {
      return null;
    }

    const match = new Match();
    match.id = parseInt(param.match_id, 10);
    match.projectId = parseInt(param.project_id, 10);
    match.date = DateUtils.ofUnixTimestampString(param.date);
    match.fixture = param.fixture;
    match.location = param.location;
    match.homeId = parseInt(param.home_id, 10);
    match.homeName = param.home_name;
    match.homeImage = param.home_image;
    match.homeResult = parseInt(param.home_result, 10);
    match.awayId = parseInt(param.away_id, 10);
    match.awayName = param.away_name;
    match.awayImage = param.away_image;
    match.awayResult = parseInt(param.away_result, 10);
    return match;
  }
}
