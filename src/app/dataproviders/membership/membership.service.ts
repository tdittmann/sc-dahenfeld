import { environment } from '../../../environments/environment';
import { MembershipJson } from './membershipJson.model';
import { Injectable, inject } from '@angular/core';
import { Membership } from '../../core/domain/membership.model';
import { Observable } from 'rxjs';
import { MembershipMapper } from './membership.mapper';
import { map } from 'rxjs/operators';
import { HttpService } from '../http.service';

@Injectable()
export class MembershipService {
  private readonly httpService = inject(HttpService);

  private readonly membershipMapper: MembershipMapper = new MembershipMapper();

  loadMembership(): Observable<Membership> {
    return this.httpService
      .get<MembershipJson>(environment.backendUrl + 'member')
      .pipe(map((membershipJson) => this.membershipMapper.mapFrom(membershipJson)));
  }
}
