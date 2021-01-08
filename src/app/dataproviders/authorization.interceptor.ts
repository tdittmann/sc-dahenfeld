import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {credentials} from '../../environments/credentials';

export class AuthorizationInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers
                .set('Authorization', 'Basic ' + btoa(credentials.authUsername + ':' + credentials.authPassword))
        });

        return next.handle(authReq);
    }

}
