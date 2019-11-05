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

    person: Person;

    isLoading = true;
    isError = false;

    constructor(private playerService: PersonService,
                private devService: DevService) {

    }

    ngOnInit(): void {

        this.playerService.loadPerson(this.personId).subscribe(
            person => {
                this.person = person;

                this.isLoading = false;
            },
            error => {
                this.isError = true;
                console.error(error);
            }
        );

    }

    public isDevModeEnabled(): boolean {
        return this.devService.isDevModeEnabled();
    }

}
