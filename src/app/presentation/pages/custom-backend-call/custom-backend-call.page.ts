import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../dataproviders/http.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-custom-backend-call',
    templateUrl: 'custom-backend-call.page.html',
    styleUrls: ['custom-backend-call.page.scss']
})
export class CustomBackendCallPage implements OnInit {

    heading: string;
    backendUrl: string;
    message: string;
    result: any = undefined;

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private httpService: HttpService) {

    }

    ngOnInit(): void {
        this.isLoading = true;
        this.isError = false;

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
                this.backendUrl = queryParams['url'];
            }
        );

        this.httpService.get(environment.backendUrl + this.backendUrl).subscribe({
            next: value => {
                this.message = 'Call successful';
                this.result = value;
                this.isLoading = false;
                this.isError = false;
            },
            error: error => {
                this.message = 'Call failed';
                this.result = error;
                this.isLoading = false;
                this.isError = true;
            }
        });
    }

}