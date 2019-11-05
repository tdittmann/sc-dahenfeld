import {Component, Input} from '@angular/core';

@Component({
    selector: 'page-state',
    templateUrl: 'page-state.component.html',
    styleUrls: ['page-state.component.scss']
})
export class PageStateComponent {

    @Input() loading = false;
    @Input() loadingMessage = 'Daten werden geladen';

    @Input() error = false;
    @Input() errorMessage = 'Daten konnten nicht geladen werden';
    @Input() errorIcon = 'sad';

    constructor() {

    }

    public getMessage(): string {
        if (this.error) {
            return this.errorMessage;
        }
        return this.loadingMessage;
    }

}