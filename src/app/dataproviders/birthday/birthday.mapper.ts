import {BirthdayJson} from './birthdayJson.model';
import {Birthday} from '../../core/domain/birthday.model';
import {DateUtils} from '../../util/DateUtils';

// TODO tdit0703: Tests
export class BirthdayMapper {

    mapFrom(param: BirthdayJson): Birthday {
        if (!param) {
            return null;
        }

        const birthday: Birthday = new Birthday();
        birthday.personId = parseInt(param.personId, 10);
        birthday.firstname = param.firstname;
        birthday.lastname = param.lastname;
        birthday.birthday = DateUtils.ofIsoDate(param.date);
        birthday.image = param.picture;

        return birthday;
    }

}
