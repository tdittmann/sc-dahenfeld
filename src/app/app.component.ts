import {Component} from '@angular/core';

import {AlertController, Platform} from '@ionic/angular';
import {DevService} from './dataproviders/dev.service';
import {StorageService} from './dataproviders/storage.service';
import {VersionService} from './dataproviders/version/version.service';
import {Capacitor, Plugins, PushNotificationToken, StatusBarStyle} from '@capacitor/core';
import {ProfileService} from './dataproviders/profile/profile.service';
import {Profile} from './core/domain/profile.model';
import {NavigationService} from './dataproviders/navigation/navigation.service';
import {RootNavigation} from './core/domain/root-navigation.model';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    // TODO tdit0703: Team-Detail: History
    // --> PersonPage needs projectId
    // --> Alte Spielzeiten enthalten Spieler aus anderen Mannschaften
    // TODO tdit0703: Article Detail -> Image popup?
    // TODO tdit0703: Backend: alte Versionen entfernen + news eigener Beitrag mit "Neue App herunterladen" oder ähnliches

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
                Plugins.SplashScreen.hide();
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
                            Plugins.StatusBar.setStyle({style: StatusBarStyle.Dark});
                        }
                    }
                }

                if (value) {
                    document.body.classList.add('dark');
                    if (Capacitor.isPluginAvailable('StatusBar')) {
                        Plugins.StatusBar.setStyle({style: StatusBarStyle.Dark});
                    }
                }
            }
        )
            .catch(reason => console.error('Can not load from storage: ', reason));
    }

    private checkAppVersion() {

        if (!this.platform.is('desktop') && Capacitor.isPluginAvailable('Device')) {
            Plugins.Device.getInfo()
                .then(deviceInfo => {
                    this.versionService.loadVersionInfo().subscribe(
                        globalAppInfo => {
                            if (deviceInfo.appVersion !== globalAppInfo.version) {
                                const appStoreUrl = deviceInfo.platform === 'android' ? globalAppInfo.getAndroidUrl() : globalAppInfo.getIosUrl();
                                this.openNewVersionAlert(appStoreUrl);
                            }
                        },
                        error => console.error(error)
                    );
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

            Plugins.PushNotifications.register();

            Plugins.PushNotifications.addListener('registration',
                (token: PushNotificationToken) => {
                    console.log('Push registration success, token: ' + token.value);

                    this.storageService.savePushToken(token.value)
                        .then()
                        .catch(reason => console.error('Saving push token in local db failed' + reason));


                    Plugins.Device.getInfo()
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

            Plugins.PushNotifications.addListener('registrationError',
                (error: any) => {
                    console.error('Error on registration: ' + JSON.stringify(error));
                }
            );
        }

    }

}
