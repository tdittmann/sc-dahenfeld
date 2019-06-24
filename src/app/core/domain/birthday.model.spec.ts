import * as moment from 'moment';
import {Birthday} from './birthday.model';

describe('Birthday', () => {

    it('should return an empty string if no firstname or lastname given', function () {
        const birthday: Birthday = new Birthday();

        expect(birthday.getName()).toBe('');
    });

    it('should return only firstname if only firstname given', function () {
        const birthday: Birthday = new Birthday();
        birthday.firstname = 'Thomas';

        expect(birthday.getName()).toBe('Thomas');
    });

    it('should return only lastname if only lastname given', function () {
        const birthday: Birthday = new Birthday();
        birthday.lastname = 'Horn';

        expect(birthday.getName()).toBe('Horn');
    });

    it('should return full name if firstname and lastname given', function () {
        const birthday: Birthday = new Birthday();
        birthday.firstname = 'Thomas';
        birthday.lastname = 'Horn';

        expect(birthday.getName()).toBe('Thomas Horn');
    });

    it('should return an empty string if no date is set', function () {
        const birthday: Birthday = new Birthday();

        expect(birthday.getFormattedDate()).toBe('');
    });

    it('should return an formatted string if date is present', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment('1995-12-25');

        expect(birthday.getFormattedDate()).toBe('25. December 1995');
    });

});
