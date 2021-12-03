import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../../../dataproviders/calendar/calendar.service';
import {CalendarEvent} from '../../../core/domain/calendarEvent.model';
import {map} from 'rxjs/operators';
import {Article} from '../../../core/domain/article.model';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {combineLatest} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'jubilee.page.html',
    styleUrls: ['jubilee.page.scss']
})
export class JubileePage implements OnInit {

    heading: string;
    events: CalendarEvent[] = [];
    articles: Article[] = [];

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private calendarService: CalendarService,
                private articleService: ArticleService) {

    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(
            params => {

                this.heading = params['heading'];

                combineLatest([
                    this.calendarService.loadCalendarEvents().pipe(map(events => events.map(event => event as CalendarEvent))),
                    this.articleService.getArticlesByCategoryId(params['categoryId'])
                ]).subscribe({
                    next:
                        ([events, articles]) => {
                            this.events = events;
                            this.articles = articles;

                            this.isLoading = false;
                        },
                    error: error => {
                        this.isError = true;
                        console.error(error);
                    }

                });

            }
        );
    }

}
