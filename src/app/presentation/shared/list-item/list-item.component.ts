import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss']
})
export class ListItemComponent {

    @Input() type: 'button' | 'reset' | 'submit' = 'button';
    @Input() image: string | undefined;
    @Input() icon: string | undefined;

    @Input() text1: string | undefined;
    @Input() text2: string | undefined;

    @Input() note: string | number | undefined;
    @Input() noteSize: 'small' | 'normal' | 'large' = 'normal';

    getText1Class(): string {
        if (this.text2 !== undefined) {
            return 'text1-normal';
        }
        return 'text1-large';
    }

    getNoteClass(): string {
        return `note-${this.noteSize}`;
    }

    showNote(): boolean {
        if (typeof this.note === 'number') {
            return !isNaN(Number(this.note.toString()));
        }

        return this.note !== undefined
            && this.note !== '';
    }
}
