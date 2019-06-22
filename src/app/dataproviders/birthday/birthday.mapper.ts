import {BirthdayJson} from './birthdayJson.model';
import {Birthday} from '../../core/domain/birthday.model';
import {Mapper} from '../../core/base/mapper';
import {DateUtils} from '../../util/DateUtils';

// TODO tdit0703: Tests
export class BirthdayMapper implements Mapper<BirthdayJson, Birthday> {

    mapFrom(param: BirthdayJson): Birthday {
        if (!param) {
            return null;
        }

        const birthday: Birthday = new Birthday();
        birthday.firstname = param.firstname;
        birthday.lastname = param.lastname;
        birthday.birthday = DateUtils.ofIsoDate(param.date);
        birthday.image = param.picture;

        return birthday;
    }

    mapTo(param: Birthday): BirthdayJson {
        if (!param) {
            return null;
        }

        return {
            firstname: param.firstname,
            lastname: param.lastname,
            date: param.birthday.format('YYYY-MM-DD'),
            picture: param.image
        };
    }

}
