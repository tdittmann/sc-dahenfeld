import { CalendarEntry } from './calendarEntry.model';

export class CalendarMatch extends CalendarEntry {
  team: string;
  fixture: string;
  homeName: string;
  homeImage: string;
  awayName: string;
  awayImage: string;
}
