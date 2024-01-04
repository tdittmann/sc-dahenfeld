import {Person} from './person.model';
import * as moment from 'moment';

describe('Person', () => {

    it('should return only firstname if no lastname is present', function () {
        const person: Person = new Person();
        person.firstname = 'Marc';

        expect(person.name).toEqual('Marc');
    });

    it('should return only lastname if no firstname is present', function () {
        const person: Person = new Person();
        person.lastname = 'Hornberg';

        expect(person.name).toEqual('Hornberg');
    });

    it('should return only lastname if no firstname is present', function () {
        const person: Person = new Person();
        person.firstname = 'Marc';
        person.lastname = 'Hornberg';

        expect(person.name).toEqual('Marc Hornberg');
    });

    it('should return correct age if birthday is today', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .subtract(5, 'years')
            .startOf('day');

        expect(person.age).toEqual(5);
    });

    it('should return correct age if birthday is tomorrow', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .subtract(5, 'years')
            .add(1, 'days')
            .startOf('day');

        expect(person.age).toEqual(4);
    });

    it('should return birthday in correct format', function () {
        const person: Person = new Person();
        person.birthday = moment('1995-12-25')
            .startOf('day');

        expect(person.formattedBirthday).toEqual('25. December 1995');
    });

    it('should return correct url for image as background', function () {
        const person: Person = new Person();
        person.image = 'person.png';

        expect(person.imageAsBackground).toEqual('url(\'person.png\')');
    });

    it('should return -1 if person has another position than the other', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';

        const second: Person = new Person();
        second.position = 'Abwehr';

        expect(first.compareTo(second)).toEqual(-1);
    });

    it('should return 1 if person has another position than the other', function () {
        const first: Person = new Person();
        first.position = 'Abwehr';

        const second: Person = new Person();
        second.position = 'Torhüter';

        expect(first.compareTo(second)).toEqual(1);
    });

    it('should return -1 if persons name is before other persons name when same positions', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';
        first.lastname = 'Albert';

        const second: Person = new Person();
        second.position = 'Torhüter';
        second.lastname = 'Zepelin';

        expect(first.compareTo(second)).toEqual(-1);
    });

    it('should return 1 if persons name is after other persons name when same positions', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';
        first.lastname = 'Zepelin';

        const second: Person = new Person();
        second.position = 'Torhüter';
        second.lastname = 'Albert';

        expect(first.compareTo(second)).toEqual(1);
    });

    it('should return 0 if persons position and name is equal', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';
        first.lastname = 'Albert';

        const second: Person = new Person();
        second.position = 'Torhüter';
        second.lastname = 'Albert';

        expect(first.compareTo(second)).toEqual(0);
    });

    it('should return specific text when birthday is toay', function () {
        const person: Person = new Person();
        person.birthday = moment().startOf('day');

        expect(person.birthdaySubtitle).toEqual('Feiert heute den 0. Geburtstag');
    });

    it('should return days until next birthday if not today', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .add(5, 'days')
            .startOf('day');

        expect(person.birthdaySubtitle).toEqual('Wird in 5 Tag(en) 1 Jahre alt');
    });

    it('should return true if birthday is today', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .startOf('day');

        expect(person.isTodaysBirthday()).toBeTruthy();
    });

    it('should return false if birthday is not today', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .add(1, 'days')
            .startOf('day');

        expect(person.isTodaysBirthday()).toBeFalsy();
    });

    it('should return correct days till birthday if birthday was yesterday', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .subtract(1, 'days')
            .startOf('day');

        expect(person.daysTillBirthday).toBeGreaterThan(360);
    });

    it('should return correct days till birthday if birthday is today', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .startOf('day');

        expect(person.daysTillBirthday).toEqual(0);
    });

    it('should return correct days till birthday if birthday is tomorrow', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .add(1, 'days')
            .startOf('day');

        expect(person.daysTillBirthday).toEqual(1);
    });

});
