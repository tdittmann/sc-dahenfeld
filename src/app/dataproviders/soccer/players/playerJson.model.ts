import {PlayerStatisticJson} from './playerStatisticJson.model';

export interface PlayerJson {

    person_id: number;
    project_id: number;
    teamplayer_id: number;
    position: string;
    age: number;
    birthday: string;
    jerseynumber: string;
    firstname: string;
    lastname: string;
    image: string;

    seasonStats: PlayerStatisticJson;
    careerStats: PlayerStatisticJson;

}
