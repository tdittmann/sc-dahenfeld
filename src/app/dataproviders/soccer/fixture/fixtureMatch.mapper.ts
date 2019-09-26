import {FixtureMatchJson} from './fixtureMatchJson.model';
import {Mapper} from '../../../core/base/mapper';
import {FixtureMatch} from '../../../core/domain/fixtureMatch.model';
import {DateUtils} from '../../../util/DateUtils';

export class FixtureMatchMapper implements Mapper<FixtureMatchJson, FixtureMatch> {

    mapFrom(param: FixtureMatchJson): FixtureMatch {
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

    mapTo(param: FixtureMatch): FixtureMatchJson {
        return {
            match_id: param.id.toString(),
            project_id: param.projectId.toString(),
            date: param.date.valueOf().toString(),
            location: param.location,
            fixture: param.fixture,
            home_id: param.homeId.toString(),
            home_name: param.homeName,
            home_image: param.homeImage,
            home_result: param.homeResult.toString(),
            away_id: param.awayId.toString(),
            away_name: param.awayName,
            away_image: param.awayImage,
            away_result: param.awayResult.toString(),
        };
    }

}
