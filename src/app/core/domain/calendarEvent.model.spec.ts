import {CalendarEvent} from './calendarEvent.model';

describe('CalendarEvent', () => {

    it('should return the image background url', function () {
        const calendarEntry: CalendarEvent = new CalendarEvent();
        calendarEntry.image = 'something.jpg';

        expect(calendarEntry.getImageAsBackground()).toBe('url(\'something.jpg\')');
    });

});
