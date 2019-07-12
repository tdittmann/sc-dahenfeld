import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {MembershipJson} from './membershipJson.model';
import {Injectable} from '@angular/core';
import {Membership} from '../../core/domain/membership.model';
import {Observable} from 'rxjs';
import {MembershipMapper} from './membership.mapper';
import {map} from 'rxjs/operators';

@Injectable()
export class MembershipService {

    private membershipMapper: MembershipMapper = new MembershipMapper();

    constructor(private http: HttpClient) {

    }

    loadMembership(): Observable<Membership> {
        return this.http.get<MembershipJson>(environment.backendUrl + 'member')
            .pipe(map(membershipJson => this.membershipMapper.mapFrom(membershipJson)));
    }

}
