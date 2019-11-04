import {Component} from '@angular/core';

import {AlertController, Platform} from '@ionic/angular';
import {DevService} from './dataproviders/dev.service';
import {StorageService} from './dataproviders/storage.service';
import {VersionService} from './dataproviders/version/version.service';
import {Capacitor, Plugins, PushNotificationToken, StatusBarStyle} from '@capacitor/core';
import {ProfileService} from './dataproviders/profile/profile.service';
import {Profile} from './core/domain/profile.model';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    // TODO tdit0703: Navigation auslagern ins Backend + im LocalStorage speichern
    // TODO tdit0703: Jubiläum beachten! Farblich abheben / Tabs (Events / Berichte / ...)?
    // TODO tdit0703: AppIcons + SplashScreen Images
    // TODO tdit0703: Fix authentication?
    // TODO tdit0703: Loading & Error wie in alter App? Ist zuverlässiger...
    // TODO tdit0703: Back-Button durch Routing-Anpassungen?
    private clubPages = [
        {title: 'Aktuelles', url: '/news', icon: 'paper'},
        {title: 'Chronik', url: '/chronicle', icon: 'time'},
        {title: 'Mitglied werden', url: '/membership', icon: 'contacts'},
        {title: 'Kalender', url: '/calendar', icon: 'calendar'},
        {title: 'Sportheim', url: '/article/830', icon: 'restaurant', params: {showOnlyTitle: true}},
        {title: 'Jubiläum 2021', url: '/article/830', icon: 'ribbon', params: {showOnlyTitle: true}}
    ];

    private soccerPages = [
        {title: '1. Mannschaft', url: '/team-detail/92', icon: 'football'},
        {title: '2. Mannschaft', url: '/team-detail/91', icon: 'football'},
        {title: 'Jugend', url: '/teams/', icon: 'football', params: {heading: 'Jugend', teamIds: [90, 89, 88, 87, 85]}}
    ];

    private departmentPages = [
        {title: 'Turnen', url: '/article/733', icon: 'body', params: {showOnlyTitle: true}},
        {title: 'Tischtennis', url: '/article/755', icon: 'walk', params: {showOnlyTitle: true}},
        {title: 'Radsport', url: '/article-tabs', icon: 'bicycle', params: {heading: 'Radsport', articles: [1260, 1261, 1262, 1263]}}
    ];

    private tennisPages = [
        {title: 'TC Dahenfeld', url: '/article/1246', icon: 'tennisball', params: {showOnlyTitle: true}}
    ];

    private devPages = [
        {title: 'Geburtstage', url: '/birthdays', icon: 'time'},
        {title: 'Profil', url: '/profile', icon: 'person'}
    ];

    private appPages = [
        {title: 'Datenschutz', url: '/article/1195', icon: 'finger-print', params: {showOnlyTitle: true}},
        {title: 'Impressum', url: '/imprint', icon: 'information-circle'}
    ];

    public navigation = [
        {title: 'Der Verein', devMode: false, content: this.clubPages},
        {title: 'Fussball', devMode: false, content: this.soccerPages},
        {title: 'Abteilungen', devMode: false, content: this.departmentPages},
        {title: 'TC Dahenfeld', devMode: false, content: this.tennisPages},
        {title: 'Entwicklung', devMode: true, content: this.devPages},
        {title: 'Die SCD-App', devMode: false, content: this.appPages}
    ];

    constructor(private platform: Platform,
                private devService: DevService,
                private storageService: StorageService,
                private versionService: VersionService,
                private alertController: AlertController,
                private profileService: ProfileService) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Hide splash screen
            if (Capacitor.isPluginAvailable('SplashScreen')) {
                Plugins.SplashScreen.hide();
            }

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
