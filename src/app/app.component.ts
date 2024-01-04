import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { DevService } from './dataproviders/dev.service';
import { StorageService } from './dataproviders/storage.service';
import { VersionService } from './dataproviders/version/version.service';
import { Capacitor } from '@capacitor/core';
import { ProfileService } from './dataproviders/profile/profile.service';
import { Profile } from './core/domain/profile.model';
import { NavigationService } from './dataproviders/navigation/navigation.service';
import { RootNavigation } from './core/domain/root-navigation.model';
import { PushNotifications, Token } from '@capacitor/push-notifications';
import { SplashScreen } from '@capacitor/splash-screen';
import { Device, DeviceInfo } from '@capacitor/device';
import { App, AppInfo } from '@capacitor/app';
import { Location } from '@angular/common';
import { ToastService } from './dataproviders/toast.service';
import { register } from 'swiper/element/bundle';

// Register swiper
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigation: RootNavigation[] = [];

  constructor(
    private platform: Platform,
    private devService: DevService,
    private storageService: StorageService,
    private versionService: VersionService,
    private alertController: AlertController,
    private profileService: ProfileService,
    private toastService: ToastService,
    private location: Location,
    private navigationService: NavigationService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Hide splash screen
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        SplashScreen.hide();
      }

      this.platform.backButton.subscribe((value) => {
        if (this.location.isCurrentPathEqualTo('/news')) {
          App.exitApp();
        } else {
          this.location.back();
        }
      });

      // Load navigation
      this.initializeNavigation();

      // Set dark mode if enabled
      this.checkDarkMode();

      // Check if a newer version exists
      this.checkAppVersion();

      // Handle push notification
      this.handlePushNotification();
    });
  }

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }

  private initializeNavigation() {
    this.navigationService.loadNavigation().subscribe({
      next: (navigation) => {
        this.navigation = navigation;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private checkDarkMode() {
    this.storageService
      .loadDarkMode()
      .then((value) => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (value === null) {
          this.storageService.saveDarkMode(prefersDark);
          if (prefersDark) {
            document.body.classList.add('dark');
          }
        }

        if (value) {
          document.body.classList.add('dark');
        }
      })
      .catch((reason) => console.error('Can not load from storage: ', reason));
  }

  private checkAppVersion() {
    if (!this.platform.is('desktop') && Capacitor.isPluginAvailable('Device') && Capacitor.isPluginAvailable('App')) {
      Promise.all([Device.getInfo(), App.getInfo()])
        .then((result) => {
          const deviceInfo: DeviceInfo = result[0];
          const appInfo: AppInfo = result[1];
          this.versionService.loadVersionInfo().subscribe({
            next: (globalAppInfos) => {
              const versionInfoForPlatform = globalAppInfos.find((value) => value.platform === deviceInfo.platform);
              if (versionInfoForPlatform && AppComponent.compareVersions(versionInfoForPlatform.version, appInfo.version) > 0) {
                this.openNewVersionAlert(versionInfoForPlatform.url);
              }
            },
            error: (error) => console.error(error),
          });
        })
        .catch((reason) => console.error('Can not load device info: ', reason));
    }
  }

  private static compareVersions(v1, v2): number {
    let v1parts = v1.split('.');
    let v2parts = v2.split('.');

    function isValidPart(x) {
      return /^\d+$/.test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
      return NaN;
    }

    v1parts = v1parts.map(Number);
    v2parts = v2parts.map(Number);

    for (let i = 0; i < v1parts.length; ++i) {
      if (v2parts.length === i) {
        return 1;
      }

      if (v1parts[i] === v2parts[i]) {
        continue;
      } else if (v1parts[i] > v2parts[i]) {
        return 1;
      } else {
        return -1;
      }
    }

    if (v1parts.length !== v2parts.length) {
      return -1;
    }

    return 0;
  }

  private async openNewVersionAlert(appStoreUrl: string) {
    if (appStoreUrl) {
      const alert = await this.alertController.create({
        header: 'Neue Version verfügbar',
        message: 'Es ist eine neue Version der SCD-App verfügbar. Aktualisiere jetzt, um weiter die App nutzen zu können.',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Aktualisieren',
            handler: () => {
              window.open(appStoreUrl);
            },
          },
        ],
      });

      await alert.present();
    }
  }

  private async handlePushNotification() {
    if (Capacitor.isPluginAvailable('PushNotifications')) {
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== 'granted') {
        this.toastService.showToast('Sie erhalten nun keine Benachrichtigungen bei Neuigkeiten rund um den SC Dahenfeld');
      }

      await PushNotifications.register();

      PushNotifications.addListener('registration', (token: Token) => {
        console.log('Push registration success, token: ' + token.value);

        this.storageService
          .savePushToken(token.value)
          .then()
          .catch((reason) => console.error('Saving push token in local db failed' + reason));

        Device.getInfo()
          .then((deviceInfo) => {
            const profile: Profile = new Profile();
            profile.pushToken = token.value;
            profile.os = deviceInfo.platform;
            this.profileService.createProfile(profile).subscribe({
              next: (value) => console.log('Saved in remote db: ' + value),
              error: (error) => console.error('Saving profile in remote db failed: ' + JSON.stringify(error)),
            });
          })
          .catch((reason) => console.error('Can not load device info: ' + reason));
      });

      PushNotifications.addListener('registrationError', (error: any) => {
        console.error('Error on registration: ' + JSON.stringify(error));
      });
    }
  }
}
