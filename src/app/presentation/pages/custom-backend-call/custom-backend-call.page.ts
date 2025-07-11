import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../dataproviders/http.service';
import { environment } from '../../../../environments/environment';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from '../../shared/card-container/card-container.component';
import { ListItemComponent } from '../../shared/list-item/list-item.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-custom-backend-call',
  templateUrl: 'custom-backend-call.page.html',
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, CardContainerComponent, ListItemComponent, JsonPipe],
})
export class CustomBackendCallPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly httpService = inject(HttpService);

  heading: string;
  backendUrl: string;
  message: string;
  result: any = undefined;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.isError = false;

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
      this.backendUrl = queryParams['url'];
    });

    this.httpService.get(environment.backendUrl + this.backendUrl).subscribe({
      next: (value) => {
        this.message = 'Call successful';
        this.result = value;
        this.isLoading = false;
        this.isError = false;
      },
      error: (error) => {
        this.message = 'Call failed';
        this.result = error;
        this.isLoading = false;
        this.isError = true;
      },
    });
  }
}
