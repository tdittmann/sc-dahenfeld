export class Referee {
  personId: number;
  firstname: string;
  lastname: string;

  get name(): string {
    return this.firstname + ' ' + this.lastname;
  }
}