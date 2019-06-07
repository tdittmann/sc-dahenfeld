import {TimelineEntry} from './timeline-entry.model';

describe('TimelineEntry', function () {

    it('should return an empty string if text is not present', function () {
        const timelineEntry: TimelineEntry = new TimelineEntry();

        expect(timelineEntry.getTruncatedText()).toBe('');
    });

    it('should return a complete string if text is short', function () {
        const timelineEntry: TimelineEntry = new TimelineEntry();
        timelineEntry.text = 'Some random text';

        expect(timelineEntry.getTruncatedText()).toBe('Some random text');
    });

    it('should return shortened string if text is long', function () {
        const timelineEntry: TimelineEntry = new TimelineEntry();
        timelineEntry.text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ' +
            'invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
            'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ' +
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ' +
            'et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
            'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
            'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
            'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, ' +
            'no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in ' +
            'vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ' +
            'accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait ' +
            'nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ' +
            'tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ' +
            'exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel ' +
            'eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat ' +
            'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit';

        expect(timelineEntry.getTruncatedText()).toBe(timelineEntry.text.substr(0, 249) + '&hellip;');
    });

});
