import {Component, Input} from '@angular/core';
import * as underscore from 'node_modules/underscore.string';

@Component({
    selector: 'page-header',
    templateUrl: 'page-header.component.html',
    styleUrls: ['page-header.component.scss']
})
export class PageHeaderComponent {

    @Input() title: string;
    @Input() color: string;

    public showLogo(): boolean {
        return underscore.isBlank(underscore.clean(this.title));
    }

}
