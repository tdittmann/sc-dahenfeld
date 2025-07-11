import { Component, OnInit, inject } from '@angular/core';
import { Profile } from '../../../core/domain/profile.model';
import { ProfileService } from '../../../dataproviders/profile/profile.service';
import { ToastService } from '../../../dataproviders/toast.service';
import { StorageService } from '../../../dataproviders/storage.service';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { IonicModule } from '@ionic/angular';
import { CardContainerComponent } from '../../shared/card-container/card-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [PageHeaderComponent, IonicModule, CardContainerComponent, FormsModule],
})
export class ProfilePage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly profileService = inject(ProfileService);
  private readonly toastService = inject(ToastService);
  private readonly storageService = inject(StorageService);

  heading: string;
  profile: Profile = new Profile();

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    this.storageService.loadPushToken().then(
      (token: string) => {
        this.loadProfile(token);
      },
      (error) => {
        console.error('Can not load from local storage: ' + error);
      },
    );
  }

  saveProfile() {
    this.profileService.saveProfile(this.profile).subscribe({
      next: () => {
        this.toastService.showToast('Ihr Profil wurde erfolgreich aktualisiert');
      },
      error: (error) => {
        this.toastService.showToast('Speichern fehlgeschlagen! Bitte erneut versuchen.');
        console.error('Saving profile failed: ' + error);
      },
    });
  }

  private loadProfile(token: string) {
    this.profileService.loadProfile(token).subscribe({
      next: (profile: Profile) => {
        this.profile = profile;
      },
      error: (error) => {
        console.error('Can not load profile from remote db: ' + error);
      },
    });
  }
}
