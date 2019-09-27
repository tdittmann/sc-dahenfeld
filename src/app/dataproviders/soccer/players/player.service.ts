import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '../../../core/domain/player.model';
import {PlayerJson} from './playerJson.model';
import {environment} from '../../../../environments/environment';
import {PlayerMapper} from './player.mapper';
import {map, tap} from 'rxjs/operators';
import {HttpService} from '../../http.service';

@Injectable()
export class PlayerService {

    private playerMapper = new PlayerMapper();

    constructor(private httpService: HttpService) {

    }

    loadPlayers(teamId: number): Observable<Player[]> {
        return this.httpService
            .get<PlayerJson[]>(environment.backendUrl + 'players?teamId=' + teamId)
            .pipe(map(pPlayer => pPlayer.map(value => this.playerMapper.mapFrom(value))))
            .pipe(tap(pPlayer => pPlayer.sort(((a, b) => a.compareTo(b)))));
    }

}
