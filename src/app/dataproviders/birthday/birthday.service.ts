import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Birthday} from '../../core/domain/birthday.model';
import {Observable} from 'rxjs';
import {BirthdayJson} from './birthdayJson.model';
import {environment} from '../../../environments/environment.prod';
import {BirthdayMapper} from './birthday.mapper';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class BirthdayService {

    private mapper: BirthdayMapper = new BirthdayMapper();

    constructor(private http: HttpClient) {

    }

    public loadBirthdays(): Observable<Birthday[]> {
        return this.http
            .get<BirthdayJson[]>(environment.backendUrl + 'birthdays')
            .pipe(map(value => value.map(this.mapper.mapFrom)))
            .pipe(tap(values => values.sort(((a, b) => a.compareTo(b)))));
    }

}
