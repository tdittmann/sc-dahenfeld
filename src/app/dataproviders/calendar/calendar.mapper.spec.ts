import { DateUtils } from '../../util/DateUtils';
import { CalendarMapper } from './calendarMapper';
import { CalendarJson } from './calendarEventJson.model';
import { CalendarMatch } from '../../core/domain/calendarMatch.model';
import { CalendarType } from '../../core/domain/calendarType.model';
import { CalendarEvent } from '../../core/domain/calendarEvent.model';

describe('CalendarMapper', () => {
  let mapper: CalendarMapper;

  beforeEach(() => {
    mapper = new CalendarMapper();
  });

  it('should handle null values for mapFrom', () => {
    expect(mapper.mapFrom(null)).toBe(null);
  });

  it('should map from matchjson to core model', () => {
    const actual: CalendarJson = {
      id: 7039,
      type: 'match',
      team: 'B-Jugend',
      location: 'Dahenfeld',
      fixture: '7. Spieltag',
      homeName: 'SGM Home',
      homeImage: 'home-image.png',
      awayName: 'SGM Away',
      awayImage: 'away-image.png',
      start: '1571560200000',
      title: '',
      end: '',
      image: '',
      text: '',
      hits: '',
    };

    const expected = new CalendarMatch();
    expected.id = 7039;
    expected.type = CalendarType.MATCH;
    expected.location = 'Dahenfeld';
    expected.start = DateUtils.ofUnixTimestampString('1571560200000');
    expected.team = 'B-Jugend';
    expected.fixture = '7. Spieltag';
    expected.homeName = 'SGM Home';
    expected.homeImage = 'home-image.png';
    expected.awayName = 'SGM Away';
    expected.awayImage = 'away-image.png';

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });

  it('should map from eventjson to core model', () => {
    const actual: CalendarJson = {
      id: 2001,
      type: 'event',
      start: '1571560200000',
      location: 'Dahenfeld',
      title: 'Some title',
      end: '0',
      image: 'image.png',
      text: 'Some text',
      hits: '200',
      team: '',
      fixture: '',
      homeName: '',
      homeImage: '',
      awayName: '',
      awayImage: '',
    };

    const expected = new CalendarEvent();
    expected.id = 2001;
    expected.type = CalendarType.EVENT;
    expected.location = 'Dahenfeld';
    expected.start = DateUtils.ofUnixTimestampString('1571560200000');
    expected.title = 'Some title';
    expected.end = DateUtils.ofUnixTimestampString('0');
    expected.image = 'image.png';
    expected.text = 'Some text';
    expected.hits = '200';

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });
});
