export interface VscAthleteJson {

    id: string;
    firstname: string;
    lastname: string;
    strava_id: string;
    activitySummary: VscAthleteActivitySummaryJson;
    progress: number;

}

export interface VscAthleteActivitySummaryJson {

    total: VscAthleteActivityJson;
    run: VscAthleteActivityJson;
    ride: VscAthleteActivityJson;

}

export interface VscAthleteActivityJson {

    totalActivities: number;
    totalDistance: number;
    totalMovingTime: string;
    totalElevation: number;

}
