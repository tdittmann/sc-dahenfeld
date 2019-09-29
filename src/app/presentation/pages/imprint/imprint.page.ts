import {Component, OnInit} from '@angular/core';
import {DevService} from '../../../dataproviders/dev.service';
import {ToastService} from '../../../dataproviders/toast.service';
import {StorageService} from '../../../dataproviders/storage.service';

@Component({
    templateUrl: 'imprint.page.html',
    styleUrls: ['imprint.page.scss']
})
export class ImprintPage implements OnInit {

    version = '5.0.0';
    developer = 'Timo Dittmann';
    darkMode = false;

    private counter = 0;
    private devModeEnabledNumber = 7;

    constructor(private devService: DevService,
                private storageService: StorageService,
                private toastService: ToastService) {

    }

    ngOnInit(): void {
        this.storageService.loadDarkMode()
            .then(value => this.darkMode = value);
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
        } else {
            document.body.classList.remove('dark');
        }

        this.storageService.saveDarkMode(this.darkMode);
    }

}
