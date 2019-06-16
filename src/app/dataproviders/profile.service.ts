import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Profile} from '../core/domain/profile.model';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient) {

    }

    loadProfile(token: string): Observable<Profile> {
        return this.http
            .get<Profile>(environment.backendUrl + 'profile?token=' + token);
    }

    saveProfile(profile: Profile): Observable<Profile> {
        return this.http
            .post<Profile>(environment.backendUrl + 'profile', JSON.stringify(profile));
    }

}
