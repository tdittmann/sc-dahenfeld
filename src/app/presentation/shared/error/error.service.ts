import {Injectable} from '@angular/core';
import {LoadingService} from '../loading/loading.service';

@Injectable()
export class ErrorService {

    private error = false;

    constructor(private loadingService: LoadingService) {

    }

    public isError(): boolean {
        return this.error;
    }

    public showError(pError: any) {
        this.loadingService.hideLoading();
        this.error = true;
        console.log(pError);
    }

    public hideError() {
        this.error = false;
    }

}
