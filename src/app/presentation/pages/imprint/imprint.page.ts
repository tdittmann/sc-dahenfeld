import {Component} from '@angular/core';
import {DevService} from '../../../dataproviders/dev.service';
import {ToastService} from '../../../dataproviders/toast.service';

@Component({
    templateUrl: 'imprint.page.html',
    styleUrls: ['imprint.page.scss']
})
export class ImprintPage {

    version = '5.0.0';
    developer = 'Timo Dittmann';

    private counter = 0;
    private devModeEnabledNumber = 7;

    constructor(private devService: DevService,
                private toastService: ToastService) {

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

}
