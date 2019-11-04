import {MatchDetailJson, MatchEventJson} from './matchDetailJson';
import {MatchDetail, MatchEvent} from '../../../core/domain/matchDetail.model';
import {DateUtils} from '../../../util/DateUtils';

// TODO tdit0703: Tests
export class MatchDetailMapper {

    mapFrom(param: MatchDetailJson): MatchDetail {
        if (!param) {
            return null;
        }

        const matchDetail: MatchDetail = new MatchDetail();
        matchDetail.matchId = parseInt(param.matchId, 10);
        matchDetail.date = DateUtils.ofUnixTimestampString(param.date);
        matchDetail.location = param.location;
        matchDetail.fixture = param.fixture;

        matchDetail.homeId = parseInt(param.home_id, 10);
        matchDetail.homeName = param.home_name;
        matchDetail.homeImage = param.home_logo;
        matchDetail.homeResult = parseInt(param.home_result, 10);

        matchDetail.awayId = parseInt(param.away_id, 10);
        matchDetail.awayName = param.away_name;
        matchDetail.awayImage = param.away_logo;
        matchDetail.awayResult = parseInt(param.away_result, 10);

        if (param.events) {
            for (const event of param.events) {
                matchDetail.events.push(this.mapEventFrom(event));
            }
        }

        return matchDetail;
    }

    private mapEventFrom(param: MatchEventJson): MatchEvent {
        if (!param) {
            return null;
        }

        const matchEvent: MatchEvent = new MatchEvent();
        matchEvent.clubId = parseInt(param.clubId, 10);
        matchEvent.teamplayerId = parseInt(param.teamplayerId, 10);
        matchEvent.firstname = param.firstname;
        matchEvent.lastname = param.lastname;
        matchEvent.time = parseInt(param.time, 10);
        matchEvent.icon = param.icon;
        matchEvent.cameInForFirstname = param.cameInForFirstname;
        matchEvent.cameInForLastname = param.cameInForLastname;
        return matchEvent;
    }
}
