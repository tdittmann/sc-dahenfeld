import {Component, Input, OnInit} from '@angular/core';
import {PersonService} from '../../../dataproviders/soccer/person/person.service';
import {Person} from '../../../core/domain/person.model';
import {DevService} from '../../../dataproviders/dev.service';

@Component({
    templateUrl: 'person.page.html',
    styleUrls: ['person.page.scss']
})
export class PersonPage implements OnInit {

    @Input() personId: number;
    @Input() projectId = 0;

    person: Person;

    isLoading = true;
    isError = false;

    constructor(private playerService: PersonService,
                private devService: DevService) {

    }

    ngOnInit(): void {
        this.loadPerson(null);
    }

    loadPerson(event) {
        this.playerService.loadPerson(this.personId, this.projectId).subscribe({
            next: person => {
                this.person = person;
                this.isLoading = false;
                this.completeEvent(event);
            },
            error: error => {
                this.isError = true;
                console.error(error);
                this.completeEvent(event);
            }
        });
    }

    completeEvent(event) {
        if (event) {
            event.target.complete();
        }
    }

    public isDevModeEnabled(): boolean {
        return this.devService.isDevModeEnabled();
    }

}
