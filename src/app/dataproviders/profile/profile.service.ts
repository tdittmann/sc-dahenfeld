import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {Profile} from '../../core/domain/profile.model';
import {ProfileJson} from './profileJson.model';
import {map} from 'rxjs/operators';
import {ProfileMapper} from './profile.mapper';

@Injectable()
export class ProfileService {

    mapper: ProfileMapper = new ProfileMapper();

    constructor(private http: HttpClient) {

    }

    loadProfile(token: string): Observable<Profile> {
        return this.http
            .get<ProfileJson>(environment.backendUrl + 'profile?token=' + token)
            .pipe(map(this.mapper.mapFrom));
    }

    saveProfile(profile: Profile): Observable<Profile> {
        const profileJson: ProfileJson = this.mapper.mapTo(profile);

        return this.http
            .post<ProfileJson>(environment.backendUrl + 'profile', JSON.stringify(profileJson));
    }

}
