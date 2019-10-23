import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) {

    }

    public get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(url, {
            headers: this.getHeaders()
        });
    }

    public put<T>(url: string, body: any): Observable<T> {
        return this.httpClient.put<T>(url, JSON.stringify(body), {
            headers: this.getHeaders()
        });
    }

    public post<T>(url: string, body: any): Observable<T> {
        return this.httpClient.post<T>(url, JSON.stringify(body), {
            headers: this.getHeaders()
        });
    }

    // TODO tdit0703: Fix Authorization
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            // 'Authorization': 'Basic ' + btoa('sc-dahenfeld:1946'),
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json'
        });
    }

}
