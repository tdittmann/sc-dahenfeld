export interface CalendarJson {
  id: number;
  type: string;
  start: string;
  location: string;

  // event
  title: string;
  end: string;
  image: string;
  text: string;
  hits: string;

  // match
  team: string;
  fixture: string;
  homeName: string;
  homeImage: string;
  awayName: string;
  awayImage: string;
}
