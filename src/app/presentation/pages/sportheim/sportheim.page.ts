import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportheimService } from '../../../dataproviders/sportheim/sportheim.service';
import { SportheimInfo } from '../../../core/domain/sportheim-info.model';
import { Browser } from '@capacitor/browser';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sportheim',
  templateUrl: 'sportheim.page.html',
  styleUrls: ['sportheim.page.scss'],
  imports: [PageHeaderComponent, PageStateComponent, IonicModule],
})
export class SportheimPage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly sportheimService = inject(SportheimService);

  heading: string;
  sportheimInfo = new SportheimInfo();
  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.sportheimService.loadSportheimInfo().subscribe({
      next: (sportheimInfo) => {
        this.sportheimInfo = sportheimInfo;
        this.isLoading = false;
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
      },
    });
  }

  navigateToExternalUrl(url: string): void {
    Browser.open({ url });
  }
}
