import {ProfileJson} from './profileJson.model';
import {Profile} from '../../core/domain/profile.model';

export class ProfileMapper {

    mapFrom(param: ProfileJson): Profile {
        if (!param) {
            return null;
        }

        const profile: Profile = new Profile();
        profile.pushToken = param.pushToken;
        profile.name = param.name;
        profile.pushBirthdays = param.pushBirthdays;
        profile.os = param.os;

        return profile;
    }

    mapTo(param: Profile): ProfileJson {
        if (!param) {
            return null;
        }

        return {
            pushToken: param.pushToken,
            name: param.name,
            pushBirthdays: param.pushBirthdays,
            os: param.os
        };
    }

}
