import {Component} from '@angular/core';

import {AlertController, Platform} from '@ionic/angular';
import {DevService} from './dataproviders/dev.service';
import {StorageService} from './dataproviders/storage.service';
import {VersionService} from './dataproviders/version/version.service';
import {Capacitor} from '@capacitor/core';
import {ProfileService} from './dataproviders/profile/profile.service';
import {Profile} from './core/domain/profile.model';
import {NavigationService} from './dataproviders/navigation/navigation.service';
import {RootNavigation} from './core/domain/root-navigation.model';
import {StatusBar, Style} from '@capacitor/status-bar';
import {PushNotifications, Token} from '@capacitor/push-notifications';
import {SplashScreen} from '@capacitor/splash-screen';
import {Device} from '@capacitor/device';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    navigation: RootNavigation[] = [];

    constructor(private platform: Platform,
                private devService: DevService,
                private storageService: StorageService,
                private versionService: VersionService,
                private alertController: AlertController,
                private profileService: ProfileService,
                private navigationService: NavigationService) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Hide splash screen
            if (Capacitor.isPluginAvailable('SplashScreen')) {
                SplashScreen.hide();
            }

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

    is2021(): boolean {
        return new Date().getFullYear() === 2021;
    }

    isDevModeEnabled(): boolean {
        return this.devService.isDevModeEnabled();
    }

    private initializeNavigation() {
        this.navigationService.loadNavigation().subscribe(
            navigation => {
                this.navigation = navigation;
            },
            error => {
                console.error(error);
            });
    }

    private checkDarkMode() {
        this.storageService.loadDarkMode().then(
            value => {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (value === null) {
                    this.storageService.saveDarkMode(prefersDark);
                    if (prefersDark) {
                        document.body.classList.add('dark');
                        if (Capacitor.isPluginAvailable('StatusBar')) {
                            StatusBar.setStyle({style: Style.Dark});
                        }
                    }
                }

                if (value) {
                    document.body.classList.add('dark');
                    if (Capacitor.isPluginAvailable('StatusBar')) {
                        StatusBar.setStyle({style: Style.Dark});
                    }
                }
            }
        )
            .catch(reason => console.error('Can not load from storage: ', reason));
    }

    private checkAppVersion() {

        if (!this.platform.is('desktop') && Capacitor.isPluginAvailable('Device')) {
            Device.getInfo()
                .then(deviceInfo => {
                    this.versionService.loadVersionInfo().subscribe({
                        next: globalAppInfos => {
                            const versionInfoForPlattform = globalAppInfos.find(value => value.platform === deviceInfo.platform);
                            if (versionInfoForPlattform && versionInfoForPlattform.version !== deviceInfo.osVersion) {
                                this.openNewVersionAlert(versionInfoForPlattform.url);
                            }
                        },
                        error: error => console.error(error)
                    });
                })
                .catch(reason => console.error('Can not load device info: ', reason));
        }
    }

    private async openNewVersionAlert(appStoreUrl: string) {
        if (appStoreUrl) {
            const alert = await this.alertController.create({
                header: 'Neue Version verfügbar',
                message: 'Es ist eine neue Version der SCD-App verfügbar. Aktualisiere jetzt um weiter die App nutzen zu können.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Aktualisieren',
                        handler: () => {
                            window.open(appStoreUrl);
                        }
                    }
                ]
            });

            await alert.present();
        }
    }

    private handlePushNotification() {

        if (Capacitor.isPluginAvailable('PushNotifications')) {

            PushNotifications.register();

            PushNotifications.addListener('registration',
                (token: Token) => {
                    console.log('Push registration success, token: ' + token.value);

                    this.storageService.savePushToken(token.value)
                        .then()
                        .catch(reason => console.error('Saving push token in local db failed' + reason));


                    Device.getInfo()
                        .then(deviceInfo => {

                            const profile: Profile = new Profile();
                            profile.pushToken = token.value;
                            profile.os = deviceInfo.platform;
                            this.profileService.createProfile(profile).subscribe(
                                value => console.log('Saved in remote db: ' + value),
                                error => console.error('Saving profile in remote db failed: ' + JSON.stringify(error))
                            );

                        })
                        .catch(reason => console.error('Can not load device info: ' + reason));
                }
            );

            PushNotifications.addListener('registrationError',
                (error: any) => {
                    console.error('Error on registration: ' + JSON.stringify(error));
                }
            );
        }

    }

}
