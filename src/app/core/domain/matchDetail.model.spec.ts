import {MatchDetail} from './matchDetail.model';
import * as moment from 'moment';

describe('MatchDetail', () => {

    it('should return an empty string when not date is set (kickOffDate)', function () {
        const matchDetail: MatchDetail = new MatchDetail();

        expect(matchDetail.getKickOffDate()).toBe('');
    });

    it('should return the kickoff date', function () {
        const matchDetail: MatchDetail = new MatchDetail();
        matchDetail.date = moment('2019-12-25 14:30:00');

        expect(matchDetail.getKickOffDate()).toBe('25. December 2019');
    });

    it('should return an empty string when not date is set (kickOffTime)', function () {
        const matchDetail: MatchDetail = new MatchDetail();

        expect(matchDetail.getKickOffTime()).toBe('');
    });

    it('should return the kickoff date', function () {
        const matchDetail: MatchDetail = new MatchDetail();
        matchDetail.date = moment('2019-12-25 14:30:00');

        expect(matchDetail.getKickOffTime()).toBe('14:30');
    });

});
