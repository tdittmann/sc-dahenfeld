import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) {

    }

    public get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(url);
    }

    public put<T>(url: string, body: any): Observable<T> {
        return this.httpClient.put<T>(url, JSON.stringify(body));
    }

    public post<T>(url: string, body: any): Observable<T> {
        return this.httpClient.post<T>(url, JSON.stringify(body));
    }

}
