import {Component, Input} from '@angular/core';
import {TimelineEntry} from '../../../../core/domain/timeline-entry.model';
import {Router} from '@angular/router';

@Component({
    selector: 'timeline',
    templateUrl: 'timeline.component.html',
    styleUrls: ['timeline.component.scss']
})
// TODo tdit0703: Module?
export class TimelineComponent {

    @Input() timelineEntries: TimelineEntry[] = [];

    constructor(private router: Router) {

    }

    public goToArticleDetail(id: string) {
        this.router.navigate(['/article', id]);
    }

}
