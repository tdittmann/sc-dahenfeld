import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-meta',
    templateUrl: 'image-meta.component.html',
    styleUrls: ['image-meta.component.scss'],
    standalone: false
})
export class ImageMetaComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() subTitleIcon: string;
  @Input() subTitle: string;
  @Input() subSubTitleIcon: string;
  @Input() subSubTitle: string;
}
