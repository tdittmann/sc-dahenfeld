import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../../../core/domain/player.model';
import {PlayerJson} from './playerJson.model';
import {environment} from '../../../../environments/environment';
import {PlayerMapper} from './player.mapper';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class PlayerService {

    private playerMapper = new PlayerMapper();

    constructor(private httpClient: HttpClient) {

    }

    loadPlayers(teamId: number): Observable<Player[]> {
        return this.httpClient
            .get<PlayerJson[]>(environment.backendUrl + 'players?teamId=' + teamId)
            .pipe(map(pPlayer => pPlayer.map(value => this.playerMapper.mapFrom(value))))
            .pipe(tap(pPlayer => pPlayer.sort(((a, b) => a.compareTo(b)))));
    }

}
