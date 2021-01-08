import {VscActivitySummary} from './vscActivitySummary.model';

export class VscAthlete {

    id: number;
    firstname: string;
    lastname: string;

    runStatistics: VscActivitySummary;
    rideStatistics: VscActivitySummary;
    totalStatistics: VscActivitySummary;
    progress: number;

    // Defines if the user has expanded the athlete in ranking
    expanded = false;

    public getName(): string {
        return this.firstname + ' ' + this.lastname;
    }

    public getProgress(): string {
        return this.progress + ' %';
    }

}
