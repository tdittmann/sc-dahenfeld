import { DateUtils } from './DateUtils';
import moment from 'moment';

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

  it('should handle nulls for diffYears', function () {
    expect(DateUtils.diffYears(null)).toBeUndefined();
  });

  it('should calculate correct diff of years', function () {
    expect(DateUtils.diffYears(moment().subtract(3, 'years'))).toBe(2);
  });

  it('should calculate correct diff of days', function () {
    expect(DateUtils.diffDays(moment().subtract(5, 'days'))).toBe(4);
  });

  it('should handle nulls for diffDays', function () {
    expect(DateUtils.diffDays(null)).toBeUndefined();
  });

  it('should parse valid iso date', function () {
    expect(DateUtils.ofIsoDate('2019-10-20').unix()).toBe(moment('2019-10-20').unix());
  });

  it('should handle nulls for ofIsoDate', function () {
    expect(DateUtils.ofIsoDate(null)).toBeUndefined();
  });

  it('should parse valid date with given pattern', function () {
    expect(DateUtils.ofPattern('20.10.2019', 'DD.MM.YYYY').unix()).toBe(moment('2019-10-20').unix());
  });

  it('should handle nulls for ofPattern', function () {
    expect(DateUtils.ofPattern(null, null)).toBeUndefined();
  });

  it('should handle nulls for ofPattern', function () {
    expect(DateUtils.ofPattern(null, 'DD.MM.YYYY')).toBeUndefined();
  });

  it('should handle nulls for ofPattern', function () {
    expect(DateUtils.ofPattern('20.10.2019', null)).toBeUndefined();
  });
});
