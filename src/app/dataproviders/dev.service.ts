import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

// TODO tdit0703: Integrate in StorageService
@Injectable()
export class DevService {

    private static DB_KEY = 'devMode';

    private devModeEnabled = false;

    constructor(private storage: Storage) {

    }

    isDevModeEnabled() {
        return this.devModeEnabled;
    }

    loadDevModeFromDb() {
        this.storage.get(DevService.DB_KEY).then(
            (devModeEnabled) => {
                this.devModeEnabled = devModeEnabled;
            }
        );
    }

    updateDevMode(devModeEnabled: boolean) {
        this.devModeEnabled = devModeEnabled;
        this.storage.set(DevService.DB_KEY, devModeEnabled);
    }

}
