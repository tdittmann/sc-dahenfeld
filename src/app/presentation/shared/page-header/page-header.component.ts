import { Component, Input } from '@angular/core';
import { TextUtils } from '../../../util/TextUtils';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss'],
  imports: [IonicModule, RouterLink],
})
export class PageHeaderComponent {
  @Input() title: string;
  @Input() color: string;
  @Input() noBorder = false;

  public showLogo(): boolean {
    return TextUtils.isBlank(this.title);
  }
}
