import {DateUtils} from './DateUtils';
import * as moment from 'moment';
import {Moment} from 'moment';

describe('DateUtils', function () {

    it('should handle undefined string', function () {
        expect(DateUtils.ofUnixTimestampString(undefined)).toBeUndefined();
    });

    it('should handle empty string', function () {
        expect(DateUtils.ofUnixTimestampString('')).toBeUndefined();
    });

    it('should handle valid string', function () {
        expect(DateUtils.ofUnixTimestampString('1550693895').unix()).toBe(moment(1550693895).unix());
    });

    it('should handle undefined number', function () {
        expect(DateUtils.ofUnixTimestampNumber(undefined)).toBeUndefined();
    });

    it('should handle valid number', function () {
        expect(DateUtils.ofUnixTimestampNumber(1550693895).unix()).toBe(moment(1550693895).unix());
    });

    it('should handle undefined date', function () {
        expect(DateUtils.ofDate(undefined)).toBeUndefined();
    });

    it('should handle valid date', function () {
        expect(DateUtils.ofDate(new Date(1550693895)).unix()).toBe(moment(1550693895).unix());
    });

});
