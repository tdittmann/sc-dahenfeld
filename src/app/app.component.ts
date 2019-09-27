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

    // TODO tdit0703: Auslagern ins Backend
    private clubPages = [
        {title: 'Aktuelles', url: '/news', icon: 'paper'},
        {title: 'Chronik', url: '/chronicle', icon: 'time'},
        {title: 'Mitglied werden', url: '/membership', icon: 'contacts'},
        {title: 'Kalender', url: '/calendar', icon: 'calendar'},
        {title: 'Sportheim', url: '/article/830', icon: 'restaurant', params: {showOnlyTitle: true}}
    ];

    private soccerPages = [
        {title: '1. Mannschaft', url: '/team-detail/92', icon: 'football'},
        {title: '2. Mannschaft', url: '/team-detail/91', icon: 'football'},
        // TODO tdit0703: Generischer Pfad
        {title: 'Jugend', url: '/soccer/youth/', icon: 'football'}
    ];

    private departmentPages = [
        {title: 'Turnen', url: '/article/733', icon: 'body', params: {showOnlyTitle: true}},
        {title: 'Tischtennis', url: '/article/755', icon: 'walk', params: {showOnlyTitle: true}},
        // TODO tdit0703: Generischer Pfad
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
        {title: 'Der Verein', devMode: false, content: this.clubPages},
        {title: 'Fussball', devMode: false, content: this.soccerPages},
        {title: 'Abteilungen', devMode: false, content: this.departmentPages},
        {title: 'TC Dahenfeld', devMode: false, content: this.tennisPages},
        {title: 'Entwicklung', devMode: true, content: this.devPages},
        {title: 'Die SCD-App', devMode: false, content: this.appPages}
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

            // TODO tdit0703: Check if newer version exists -> Show modal!
        });
    }

    isDevModeEnabled(): boolean {
        return this.devService.isDevModeEnabled();
    }

}
