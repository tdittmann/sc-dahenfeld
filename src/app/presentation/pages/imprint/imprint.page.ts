import {Component, OnInit} from '@angular/core';
import {DevService} from '../../../dataproviders/dev.service';
import {ToastService} from '../../../dataproviders/toast.service';
import {StorageService} from '../../../dataproviders/storage.service';

import {Capacitor, Plugins, StatusBarStyle} from '@capacitor/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'imprint.page.html',
    styleUrls: ['imprint.page.scss']
})
export class ImprintPage implements OnInit {

    heading: string;
    version = '5.4.0';
    developer = 'Timo Dittmann';
    darkMode = false;

    private counter = 0;
    private devModeEnabledNumber = 7;

    constructor(private activatedRoute: ActivatedRoute,
                private devService: DevService,
                private storageService: StorageService,
                private toastService: ToastService) {

    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.storageService.loadDarkMode()
            .then(value => this.darkMode = value);

        if (Capacitor.isPluginAvailable('Device')) {
            Plugins.Device.getInfo()
                .then(value => this.version = value.appVersion)
                .catch(reason => console.error('Can not load device info: ', reason));
        }
    }

    isDevModeEnabled(): boolean {
        return this.devService.isDevModeEnabled();
    }

    activateDevMode(): void {
        this.counter++;

        if (this.counter === this.devModeEnabledNumber) {
            this.devService.updateDevMode(true);
            this.toastService.showToast('Du hast den Entwickler-Modus aktiviert.');
        }
    }

    deactivateDevMode() {
        this.devService.updateDevMode(false);
        this.counter = 0;
        this.toastService.showToast('Entwickler-Modus deaktiviert.');
    }

    toggleDarkMode() {
        if (this.darkMode) {
            document.body.classList.add('dark');
            if (Capacitor.isPluginAvailable('StatusBar')) {
                Plugins.StatusBar.setStyle({style: StatusBarStyle.Dark});
            }
        } else {
            document.body.classList.remove('dark');
            if (Capacitor.isPluginAvailable('StatusBar')) {
                Plugins.StatusBar.setStyle({style: StatusBarStyle.Light});
            }
        }

        this.storageService.saveDarkMode(this.darkMode);
    }

}
