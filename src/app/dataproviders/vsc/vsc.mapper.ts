import {VscAthlete} from '../../core/domain/vscAthlete.model';
import {VscAthleteActivityJson, VscAthleteJson} from './vscRankingJson.model';
import {VscActivitySummary} from '../../core/domain/vscActivitySummary.model';

export class VscMapper {

    public mapFrom(vscAthleteJson: VscAthleteJson): VscAthlete {
        const athlete = new VscAthlete();
        athlete.id = parseInt(vscAthleteJson.id, 10);
        athlete.firstname = vscAthleteJson.firstname;
        athlete.lastname = vscAthleteJson.lastname;
        athlete.runStatistics = this.mapStatistics(vscAthleteJson.activitySummary.run);
        athlete.rideStatistics = this.mapStatistics(vscAthleteJson.activitySummary.ride);
        athlete.totalStatistics = this.mapStatistics(vscAthleteJson.activitySummary.total);
        athlete.progress = vscAthleteJson.progress;
        return athlete;
    }

    private mapStatistics(vscAthleteActivityJson: VscAthleteActivityJson): VscActivitySummary {
        const vscActivitySummary = new VscActivitySummary();
        vscActivitySummary.totalActivities = vscAthleteActivityJson.totalActivities;
        vscActivitySummary.totalDistance = vscAthleteActivityJson.totalDistance;
        vscActivitySummary.totalMovingTime = vscAthleteActivityJson.totalMovingTime;
        vscActivitySummary.totalElevation = vscAthleteActivityJson.totalElevation;
        return vscActivitySummary;
    }

}
