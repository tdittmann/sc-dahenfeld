import {MomentWrapper} from './momentWrapper';
import * as moment from 'moment';

describe('MomentWrapper', function () {

    it('should handle undefined string', function () {
        expect(MomentWrapper.ofUnixTimestampString(undefined)).toBeUndefined();
    });

    it('should handle empty string', function () {
        expect(MomentWrapper.ofUnixTimestampString('')).toBeUndefined();
    });

    it('should handle valid string', function () {
        expect(MomentWrapper.ofUnixTimestampString('1550693895').unix()).toBe(moment(1550693895).unix());
    });

    it('should handle undefined number', function () {
        expect(MomentWrapper.ofUnixTimestampNumber(undefined)).toBeUndefined();
    });

    it('should handle valid number', function () {
        expect(MomentWrapper.ofUnixTimestampNumber(1550693895).unix()).toBe(moment(1550693895).unix());
    });

    it('should handle undefined date', function () {
        expect(MomentWrapper.ofDate(undefined)).toBeUndefined();
    });

    it('should handle valid date', function () {
        expect(MomentWrapper.ofUnixTimestampNumber(new Date(1550693895)).unix()).toBe(moment(1550693895).unix());
    });

});
