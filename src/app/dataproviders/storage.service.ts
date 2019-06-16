import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class StorageService {

    private static PUSH_TOKEN_KEY = 'pushToken';
    private static DEV_MODE_KEY = 'devMode';

    constructor(private storage: Storage) {

    }

    loadPushToken(): Promise<string> {
        return this.storage.get(StorageService.PUSH_TOKEN_KEY);
    }

    savePushToken(token: string): Promise<string> {
        return this.storage.set(StorageService.PUSH_TOKEN_KEY, token);
    }

}
