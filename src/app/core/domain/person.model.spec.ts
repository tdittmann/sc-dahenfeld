import {Person} from './person.model';
import * as moment from 'moment';

describe('Person', () => {

    it('should return only firstname if no lastname is present', function () {
        const person: Person = new Person();
        person.firstname = 'Marc';

        expect(person.getName()).toBe('Marc');
    });

    it('should return only lastname if no firstname is present', function () {
        const person: Person = new Person();
        person.lastname = 'Hornberg';

        expect(person.getName()).toBe('Hornberg');
    });

    it('should return only lastname if no firstname is present', function () {
        const person: Person = new Person();
        person.firstname = 'Marc';
        person.lastname = 'Hornberg';

        expect(person.getName()).toBe('Marc Hornberg');
    });

    it('should return correct age if birthday is today', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .subtract(5, 'years')
            .startOf('day');

        expect(person.getAge()).toBe(5);
    });

    it('should return correct age if birthday is tomorrow', function () {
        const person: Person = new Person();
        person.birthday = moment()
            .subtract(5, 'years')
            .add(1, 'days')
            .startOf('day');

        expect(person.getAge()).toBe(4);
    });

    it('should return birthday in correct format', function () {
        const person: Person = new Person();
        person.birthday = moment('1995-12-25')
            .startOf('day');

        expect(person.getFormattedBirthday()).toBe('25. December 1995');
    });

    it('should return correct url for image as background', function () {
        const person: Person = new Person();
        person.image = 'person.png';

        expect(person.getImageAsBackground()).toBe('url(\'person.png\')');
    });

    it('should return -1 if person has another position than the other', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';

        const second: Person = new Person();
        second.position = 'Abwehr';

        expect(first.compareTo(second)).toBe(-1);
    });

    it('should return 1 if person has another position than the other', function () {
        const first: Person = new Person();
        first.position = 'Abwehr';

        const second: Person = new Person();
        second.position = 'Torhüter';

        expect(first.compareTo(second)).toBe(1);
    });

    it('should return -1 if persons name is before other persons name when same positions', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';
        first.lastname = 'Albert';

        const second: Person = new Person();
        second.position = 'Torhüter';
        second.lastname = 'Zepelin';

        expect(first.compareTo(second)).toBe(-1);
    });

    it('should return 1 if persons name is after other persons name when same positions', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';
        first.lastname = 'Zepelin';

        const second: Person = new Person();
        second.position = 'Torhüter';
        second.lastname = 'Albert';

        expect(first.compareTo(second)).toBe(1);
    });

    it('should return 0 if persons position and name is equal', function () {
        const first: Person = new Person();
        first.position = 'Torhüter';
        first.lastname = 'Albert';

        const second: Person = new Person();
        second.position = 'Torhüter';
        second.lastname = 'Albert';

        expect(first.compareTo(second)).toBe(0);
    });

});
