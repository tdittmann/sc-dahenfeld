import moment, { Moment } from 'moment';

export class DateUtils {
  public static diffYears(pDate: Moment): number {
    if (!pDate) {
      return undefined;
    }

    return moment().startOf('day').diff(pDate, 'years');
  }

  public static diffDays(pDate: Moment): number {
    if (!pDate) {
      return undefined;
    }

    return Math.abs(moment().startOf('day').diff(pDate, 'days'));
  }

  public static ofIsoDate(pDate: string): Moment {
    if (!pDate) {
      return undefined;
    }

    return this.ofPattern(pDate, 'YYYY-MM-DD');
  }

  public static ofPattern(pDate: string, pFormat: string): Moment {
    if (!pDate || !pFormat) {
      return undefined;
    }

    return moment(pDate, pFormat).locale('de');
  }

  public static ofUnixTimestampString(pDate: string): Moment {
    if (!pDate) {
      return undefined;
    }

    return this.ofUnixTimestampNumber(parseInt(pDate, 10));
  }

  public static ofUnixTimestampNumber(pDate: number): Moment {
    if (!pDate) {
      return undefined;
    }

    return this.ofDate(new Date(pDate));
  }

  public static ofDate(pDate: Date): Moment {
    if (!pDate) {
      return undefined;
    }

    return moment(pDate).locale('de');
  }
}
