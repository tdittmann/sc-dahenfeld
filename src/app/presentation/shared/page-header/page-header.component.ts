import {Component, Input} from '@angular/core';
import {TextUtils} from '../../../util/TextUtils';

@Component({
    selector: 'page-header',
    templateUrl: 'page-header.component.html',
    styleUrls: ['page-header.component.scss']
})
export class PageHeaderComponent {

    @Input() title: string;
    @Input() color: string;
    @Input() noBorder = false;

    public showLogo(): boolean {
        return TextUtils.isBlank(this.title);
    }

}
