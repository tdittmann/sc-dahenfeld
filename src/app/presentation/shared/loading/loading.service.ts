import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

    private loading = false;

    constructor() {

    }

    public isLoading(): boolean {
        return this.loading;
    }

    public showLoading() {
        this.loading = true;
    }

    public hideLoading() {
        this.loading = false;
    }

}
