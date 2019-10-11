import {PlayerStatisticJson} from './playerStatisticJson.model';

export interface PlayerJson {

    person_id: number;
    position: string;
    birthday: string;
    jerseynumber: string;
    firstname: string;
    lastname: string;
    image: string;

    seasonStats: PlayerStatisticJson;
    careerStats: PlayerStatisticJson;

}
