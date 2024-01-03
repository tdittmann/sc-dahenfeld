import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';

// TODO tdit0703: Remove me
@Component({
    selector: 'app-variable-content',
    templateUrl: './variable-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariableContentComponent {
    @Input() isTemplate = false;
    @Input() item: string | TemplateRef<any>;
}
