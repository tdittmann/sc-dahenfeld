import {CalendarJson} from './calendarEventJson.model';
import {CalendarEvent} from '../../core/domain/calendarEvent.model';
import {DateUtils} from '../../util/DateUtils';
import {CalendarType} from '../../core/domain/calendarType.model';
import {CalendarMatch} from '../../core/domain/calendarMatch.model';
import {CalendarEntry} from '../../core/domain/calendarEntry.model';

// TODO tdit0703: Tests
export class CalendarMapper {

    mapFrom(param: CalendarJson): CalendarEntry {
        if (!param) {
            return null;
        }

        if (param.type === 'match') {
            const calendarEntry = new CalendarMatch();
            calendarEntry.id = param.id;
            calendarEntry.type = CalendarType.MATCH;
            calendarEntry.location = param.location;
            calendarEntry.start = DateUtils.ofUnixTimestampString(param.start);
            calendarEntry.team = param.team;
            calendarEntry.fixture = param.fixture;
            calendarEntry.homeName = param.homeName;
            calendarEntry.homeImage = param.homeImage;
            calendarEntry.awayName = param.awayName;
            calendarEntry.awayImage = param.awayImage;
            return calendarEntry;
        } else {
            const calendarEntry = new CalendarEvent();
            calendarEntry.id = param.id;
            calendarEntry.type = CalendarType.EVENT;
            calendarEntry.location = param.location;
            calendarEntry.start = DateUtils.ofUnixTimestampString(param.start);
            calendarEntry.title = param.title;
            calendarEntry.end = DateUtils.ofUnixTimestampString(param.end);
            calendarEntry.image = param.image;
            calendarEntry.text = param.text;
            calendarEntry.hits = param.hits;
            return calendarEntry;
        }
    }

}
