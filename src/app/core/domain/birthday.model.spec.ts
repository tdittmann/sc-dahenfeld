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

    it('should return specific text when birthday is toay', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment().startOf('day');

        expect(birthday.getSubtitle()).toBe('Feiert heute den 0. Geburtstag');
    });

    it('should return days until next birthday if not today', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .add(5, 'days')
            .startOf('day');

        expect(birthday.getSubtitle()).toBe('Wird in 5 Tag(en) 1 Jahre alt');
    });

    it('should return true if birthday is today', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .startOf('day');

        expect(birthday.isToday()).toBeTruthy();
    });

    it('should return false if birthday is not today', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .add(1, 'days')
            .startOf('day');

        expect(birthday.isToday()).toBeFalsy();
    });

    it('should return correct age if birthday is tomorrow', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .subtract(5, 'years')
            .add(1, 'days')
            .startOf('day');

        expect(birthday.getAge()).toBe(4);
    });

    it('should return correct age if birthday is today', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .subtract(5, 'years')
            .startOf('day');

        expect(birthday.getAge()).toBe(5);
    });

    it('should return correct age if birthday was yesterday', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .subtract(5, 'years')
            .subtract(1, 'days')
            .startOf('day');

        expect(birthday.getAge()).toBe(5);
    });

    it('should return correct days till birthday if birthday was yesterday', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .subtract(1, 'days')
            .startOf('day');

        expect(birthday.getDaysTillBirthday()).toBe(365);
    });

    it('should return correct days till birthday if birthday is today', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .startOf('day');

        expect(birthday.getDaysTillBirthday()).toBe(0);
    });

    it('should return correct days till birthday if birthday is tomorrow', function () {
        const birthday: Birthday = new Birthday();
        birthday.birthday = moment()
            .add(1, 'days')
            .startOf('day');

        expect(birthday.getDaysTillBirthday()).toBe(1);
    });

    it('should return -1 if current birthday is before overgiven birthday', function () {
        const firstBirthday: Birthday = new Birthday();
        firstBirthday.birthday = moment().add(1, 'days').startOf('day');

        const secondBirthday: Birthday = new Birthday();
        secondBirthday.birthday = moment().add(2, 'days').startOf('day');

        expect(firstBirthday.compareTo(secondBirthday)).toBe(-1);
    });

    it('should return 1 if current birthday is after overgiven birthday', function () {
        const firstBirthday: Birthday = new Birthday();
        firstBirthday.birthday = moment().add(2, 'days').startOf('day');

        const secondBirthday: Birthday = new Birthday();
        secondBirthday.birthday = moment().add(1, 'days').startOf('day');

        expect(firstBirthday.compareTo(secondBirthday)).toBe(1);
    });

    it('should return 0 if current birthday is equal overgiven birthday', function () {
        const firstBirthday: Birthday = new Birthday();
        firstBirthday.birthday = moment().add(1, 'days').startOf('day');

        const secondBirthday: Birthday = new Birthday();
        secondBirthday.birthday = moment().add(1, 'days').startOf('day');

        expect(firstBirthday.compareTo(secondBirthday)).toBe(0);
    });

});
