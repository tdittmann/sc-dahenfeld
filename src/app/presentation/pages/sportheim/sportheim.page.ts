import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SportheimService} from '../../../dataproviders/sportheim/sportheim.service';
import {SportheimInfo} from '../../../core/domain/sportheim-info.model';
import {Browser} from '@capacitor/browser';

@Component({
    selector: 'app-sportheim',
    templateUrl: 'sportheim.page.html',
    styleUrls: ['sportheim.page.scss']
})
export class SportheimPage implements OnInit {

    heading: string;
    sportheimInfo = new SportheimInfo();
    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private sportheimService: SportheimService) {

    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        this.sportheimService.loadSportheimInfo().subscribe({
            next: (sportheimInfo) => {
                this.sportheimInfo = sportheimInfo;
                this.isLoading = false;
            },
            error: (error) => {
                this.isError = true;
                console.error(error);
            }
        });
    }

    navigateToExternalUrl(url: string): void {
        Browser.open({url});
    }

}
