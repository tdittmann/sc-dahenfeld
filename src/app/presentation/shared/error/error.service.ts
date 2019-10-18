import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

    private error = false;

    constructor() {

    }

    public isError(): boolean {
        return this.error;
    }

    public showError(pError: any) {
        this.error = true;
        console.log(pError);
    }

    public hideError() {
        this.error = false;
    }

}
