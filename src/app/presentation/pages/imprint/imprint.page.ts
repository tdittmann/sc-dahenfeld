import { Component, OnInit } from '@angular/core';
import { DevService } from '../../../dataproviders/dev.service';
import { ToastService } from '../../../dataproviders/toast.service';
import { StorageService } from '../../../dataproviders/storage.service';

import { Capacitor } from '@capacitor/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../dataproviders/profile/profile.service';
import { App } from '@capacitor/app';

@Component({
  templateUrl: 'imprint.page.html',
})
export class ImprintPage implements OnInit {
  heading: string;
  version = '6.8.1';
  developer = 'Timo Dittmann';
  darkMode = false;

  devModePassword: string;
  showDevModePasswordInput = false;

  private counter = 0;
  private readonly showDevModePasswordNumber = 7;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly devService: DevService,
    private readonly storageService: StorageService,
    private readonly toastService: ToastService,
    private readonly profileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.storageService.loadDarkMode().then((value) => (this.darkMode = value));

    if (Capacitor.isPluginAvailable('Device')) {
      App.getInfo()
        .then((value) => (this.version = value.version))
        .catch((reason) => console.error('Can not load device info: ', reason));
    }
  }

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }

  activateDevMode(): void {
    this.counter++;

    if (this.counter === this.showDevModePasswordNumber) {
      this.showDevModePasswordInput = true;
    }
  }

  validateDevModePassword() {
    this.profileService.validateDevModePassword(this.devModePassword).subscribe({
      next: () => {
        this.devService.updateDevMode(true);
        this.toastService.showToast('Du hast den Entwickler-Modus aktiviert.');
      },
      error: (error) => {
        this.toastService.showToast('Falsches Passwort.');
        console.error(error);
      },
    });
  }

  deactivateDevMode() {
    this.devService.updateDevMode(false);
    this.counter = 0;
    this.toastService.showToast('Entwickler-Modus deaktiviert.');
  }

  toggleDarkMode() {
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    this.storageService.saveDarkMode(this.darkMode);
  }
}
