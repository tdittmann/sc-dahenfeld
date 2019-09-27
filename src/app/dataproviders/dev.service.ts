import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable()
export class DevService {

    private devModeEnabled = false;

    constructor(private storageService: StorageService) {
        this.storageService.loadDevMode().then(
            (devModeEnabled) => {
                this.devModeEnabled = devModeEnabled;
            }
        );
    }

    isDevModeEnabled() {
        return this.devModeEnabled;
    }

    updateDevMode(devModeEnabled: boolean) {
        this.devModeEnabled = devModeEnabled;
        this.storageService.saveDevMode(this.devModeEnabled);
    }

}
