import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-image-meta',
  templateUrl: 'image-meta.component.html',
  styleUrls: ['image-meta.component.scss'],
  imports: [NgStyle, IonicModule],
})
export class ImageMetaComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() subTitleIcon: string;
  @Input() subTitle: string;
  @Input() subSubTitleIcon: string;
  @Input() subSubTitle: string;
}
