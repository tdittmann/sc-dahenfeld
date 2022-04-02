export class MatchPlayer {

    id: number;
    firstname: string;
    lastname: string;
    image: string;
    position: string;
    jerseynumber: number;
    captain: boolean;

    get name(): string {
        return this.firstname + ' ' + this.lastname;
    }

    public compareTo(matchPlayer: MatchPlayer): number {
        const positionOrder = ['Torhüter', 'Abwehr', 'Mittelfeld', 'Sturm'];

        // First order by position
        if (positionOrder.indexOf(this.position) < positionOrder.indexOf(matchPlayer.position)) {
            return -1;
        } else if (positionOrder.indexOf(this.position) > positionOrder.indexOf(matchPlayer.position)) {
            return 1;
        }

        // Then order by jersey number
        if (this.jerseynumber < matchPlayer.jerseynumber) {
            return -1;
        }
        if (this.jerseynumber > matchPlayer.jerseynumber) {
            return 1;
        }

        // Then order by lastname
        if (this.lastname.toLowerCase() < matchPlayer.lastname.toLowerCase()) {
            return -1;
        }
        if (this.lastname.toLowerCase() > matchPlayer.lastname.toLowerCase()) {
            return 1;
        }

        return 0;
    }

}
