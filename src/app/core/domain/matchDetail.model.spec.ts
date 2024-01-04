import { MatchDetail } from './matchDetail.model';
import * as moment from 'moment';
import { MatchEvent } from './matchEvent.model';

describe('MatchDetail', () => {
  it('should return an empty string when not date is set (kickOffDate)', function () {
    const matchDetail: MatchDetail = new MatchDetail();

    expect(matchDetail.getKickOffDate()).toBe('');
  });

  it('should return the kickoff date', function () {
    const matchDetail: MatchDetail = new MatchDetail();
    matchDetail.date = moment('2019-12-25 14:30:00');

    expect(matchDetail.getKickOffDate()).toBe('25. December 2019 um 14:30 Uhr');
  });
  it('should return an empty string when not date is set)', function () {
    const matchDetail: MatchDetail = new MatchDetail();

    expect(matchDetail.getDate()).toBe('');
  });

  it('should return the date', function () {
    const matchDetail: MatchDetail = new MatchDetail();
    matchDetail.date = moment('2019-12-25 14:30:00');

    expect(matchDetail.getDate()).toBe('25. December 2019');
  });

  it('should return the home result as empty string if empty', () => {
    const matchDetail: MatchDetail = new MatchDetail();

    expect(matchDetail.getHomeResult()).toEqual('-');
  });

  it('should return the home result', () => {
    const matchDetail: MatchDetail = new MatchDetail();
    matchDetail.homeResult = 9;

    expect(matchDetail.getHomeResult()).toEqual('9');
  });

  it('should return the away result as empty string if empty', () => {
    const matchDetail: MatchDetail = new MatchDetail();

    expect(matchDetail.getAwayResult()).toEqual('-');
  });

  it('should return the away result', () => {
    const matchDetail: MatchDetail = new MatchDetail();
    matchDetail.awayResult = 9;

    expect(matchDetail.getAwayResult()).toEqual('9');
  });

  it('should return the substitutions', () => {
    const eventNoSubstitution = new MatchEvent();
    eventNoSubstitution.time = 45;

    const eventSubstitution = new MatchEvent();
    eventSubstitution.time = 45;
    eventSubstitution.cameInForFirstname = 'Markus';

    const matchDetail: MatchDetail = new MatchDetail();
    matchDetail.events = [eventSubstitution, eventNoSubstitution];

    expect(matchDetail.getSubstitutions()).toEqual([eventSubstitution]);
  });
});
