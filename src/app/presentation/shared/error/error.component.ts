import {Component} from '@angular/core';
import {ErrorService} from './error.service';

@Component({
    selector: 'error',
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.scss']
})
export class ErrorComponent {

    constructor(private errorService: ErrorService) {

    }

    reload() {
        this.errorService.hideError();
        location.reload();
    }

}
