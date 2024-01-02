import {ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: 'tab.component.html',
    styleUrls: ['./tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class TabComponent {

    @HostBinding('class.active')
    @Input() active = false;

    @Input() tabTitle: string | TemplateRef<any> = 'Tab';

    @Input() disabled = false;

    isTemplate = false;
}
