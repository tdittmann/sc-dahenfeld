export class VscActivitySummary {

    totalActivities: number;
    totalDistance: number;
    totalMovingTime: string;
    totalElevation: number;

    public getDistanceString(): string {
        return this.totalDistance + 'km';
    }

    public getElevationString(): string {
        return Math.round(this.totalElevation) + 'm';
    }

    public getActivitiesString(): string {
        return this.totalActivities + ' Aktivitäten';
    }

}
