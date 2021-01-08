import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Profile} from '../../core/domain/profile.model';
import {ProfileJson} from './profileJson.model';
import {map} from 'rxjs/operators';
import {ProfileMapper} from './profile.mapper';
import {HttpService} from '../http.service';

@Injectable()
export class ProfileService {

    mapper: ProfileMapper = new ProfileMapper();

    constructor(private httpService: HttpService) {

    }

    loadProfile(token: string): Observable<Profile> {
        return this.httpService
            .get<ProfileJson>(environment.backendUrl + 'profile?token=' + token)
            .pipe(map(this.mapper.mapFrom));
    }

    createProfile(profile: Profile): Observable<Profile> {
        const profileJson: ProfileJson = this.mapper.mapTo(profile);

        return this.httpService
            .put<ProfileJson>(environment.backendUrl + 'profile', profileJson);
    }

    saveProfile(profile: Profile): Observable<Profile> {
        const profileJson: ProfileJson = this.mapper.mapTo(profile);

        return this.httpService
            .post<ProfileJson>(environment.backendUrl + 'profile', profileJson);
    }

}
