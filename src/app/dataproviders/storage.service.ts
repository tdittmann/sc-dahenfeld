import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {
  private readonly storage = inject(Storage);

  private static readonly PUSH_TOKEN_KEY = 'pushToken';
  private static readonly DEV_MODE_KEY = 'devMode';
  private static readonly DARK_MODE_KEY = 'darkMode';

  constructor() {
    this.storage.create();
  }

  loadPushToken(): Promise<string> {
    return this.storage.get(StorageService.PUSH_TOKEN_KEY);
  }

  savePushToken(token: string): Promise<string> {
    return this.storage.set(StorageService.PUSH_TOKEN_KEY, token);
  }

  loadDevMode(): Promise<boolean> {
    return this.storage.get(StorageService.DEV_MODE_KEY);
  }

  saveDevMode(devMode: boolean): Promise<boolean> {
    return this.storage.set(StorageService.DEV_MODE_KEY, devMode);
  }

  loadDarkMode(): Promise<boolean> {
    return this.storage.get(StorageService.DARK_MODE_KEY);
  }

  saveDarkMode(darkMode: boolean): Promise<boolean> {
    return this.storage.set(StorageService.DARK_MODE_KEY, darkMode);
  }
}
