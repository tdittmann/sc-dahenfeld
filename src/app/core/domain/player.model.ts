import {Moment} from 'moment';
import {PlayerStatistic} from './playerStatistic.model';

export class Player {

    id: number;
    // TODO tdit0703: Brauch ich das?
    projectId: number;
    // TODO tdit0703: Brauch ich das?
    teamplayerId: number;
    firstname: string;
    lastname: string;
    image: string;
    position: string;
    // TODO tdit0703: Brauch ich das?
    age: number;
    birthday: Moment;
    jerseynumber: number;

    seasonStatistic: PlayerStatistic;
    careerStatistic: PlayerStatistic;

    public getName(): string {
        return this.firstname + ' ' + this.lastname;
    }

    public compareTo(pPlayer: Player): number {
        const positionOrder = ['Torhüter', 'Abwehr', 'Mittelfeld', 'Sturm'];

        // First order by position
        if (positionOrder.indexOf(this.position) < positionOrder.indexOf(pPlayer.position)) {
            return -1;
        } else if (positionOrder.indexOf(this.position) > positionOrder.indexOf(pPlayer.position)) {
            return 1;
        }

        // Then order by lastname
        if (this.lastname.toLowerCase() < pPlayer.lastname.toLowerCase()) {
            return -1;
        }
        if (this.lastname.toLowerCase() > pPlayer.lastname.toLowerCase()) {
            return 1;
        }

        return 0;
    }


}
