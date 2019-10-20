import {FixtureMatchJson} from './fixtureMatchJson.model';
import {FixtureMatch} from '../../../core/domain/fixtureMatch.model';
import {DateUtils} from '../../../util/DateUtils';

export class FixtureMatchMapper {

    mapFrom(param: FixtureMatchJson): FixtureMatch {
        if (!param) {
            return null;
        }

        const fixtureMatch = new FixtureMatch();
        fixtureMatch.id = parseInt(param.match_id, 10);
        fixtureMatch.projectId = parseInt(param.project_id, 10);
        fixtureMatch.date = DateUtils.ofUnixTimestampString(param.date);
        fixtureMatch.fixture = param.fixture;
        fixtureMatch.location = param.location;
        fixtureMatch.homeId = parseInt(param.home_id, 10);
        fixtureMatch.homeName = param.home_name;
        fixtureMatch.homeImage = param.home_image;
        fixtureMatch.homeResult = parseInt(param.home_result, 10);
        fixtureMatch.awayId = parseInt(param.away_id, 10);
        fixtureMatch.awayName = param.away_name;
        fixtureMatch.awayImage = param.away_image;
        fixtureMatch.awayResult = parseInt(param.away_result, 10);
        return fixtureMatch;
    }

}
