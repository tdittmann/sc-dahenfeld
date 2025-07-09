import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: 'tab.component.html',
    styleUrls: ['./tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class TabComponent {
  @HostBinding('class.active')
  @Input()
  active = false;

  @Input() tabTitle = 'Tab';

  @Input() disabled = false;
}
