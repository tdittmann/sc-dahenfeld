import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {DevService} from './dataproviders/dev.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    private clubPages = [
        {title: 'Aktuelles', url: '/news', icon: 'paper'},
        {title: 'Chronik', url: '/chronicle', icon: 'time'},
        {title: 'Mitglied werden', url: '/getmember', icon: 'contacts'},
        {title: 'Kalender', url: '/calendar', icon: 'calendar'},
        {title: 'Sportheim', url: '/article/830', icon: 'restaurant', params: {showOnlyTitle: true}}
    ];

    private soccerPages = [
        {title: '1. Mannschaft', url: '/soccer/mens/1', icon: 'football'},
        {title: '2. Mannschaft', url: '/soccer/mens/2', icon: 'football'},
        {title: 'Jugend', url: '/soccer/youth/', icon: 'football'}
    ];

    private departmentPages = [
        {title: 'Turnen', url: '/article/733', icon: 'body', params: {showOnlyTitle: true}},
        {title: 'Tischtennis', url: '/article/755', icon: 'walk', params: {showOnlyTitle: true}},
        {title: 'Radsport', url: '/cycling', icon: 'bicycle'}
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
        {title: 'Der Verein', content: this.clubPages},
        {title: 'Fussball', content: this.soccerPages},
        {title: 'Abteilungen', content: this.departmentPages},
        {title: 'TC Dahenfeld', content: this.tennisPages},
        {title: 'Entwicklung', content: this.devPages},
        {title: 'Die SCD-App', content: this.appPages}
    ];

    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                private devService: DevService) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Hide splash screen
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            // Load devMode in service
            this.devService.loadDevModeFromDb();
        });
    }
}
