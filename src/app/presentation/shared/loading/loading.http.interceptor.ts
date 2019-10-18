import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.showLoading();
        return next.handle(req);
    }

}
