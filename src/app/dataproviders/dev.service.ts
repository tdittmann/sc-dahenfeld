import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class DevService {
  private readonly storageService = inject(StorageService);

  private devModeEnabled = false;

  constructor() {
    this.storageService.loadDevMode().then((devModeEnabled) => {
      this.devModeEnabled = devModeEnabled;
    });
  }

  isDevModeEnabled() {
    return this.devModeEnabled;
  }

  updateDevMode(devModeEnabled: boolean) {
    this.devModeEnabled = devModeEnabled;
    this.storageService.saveDevMode(this.devModeEnabled);
  }
}
