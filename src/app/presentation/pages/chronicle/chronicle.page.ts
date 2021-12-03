import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {TimelineEntry} from '../../../core/domain/timeline-entry.model';
import {Article} from '../../../core/domain/article.model';
import {TimelineMapper} from '../../../dataproviders/timeline/timeline.mapper';
import {TimelineService} from '../../../dataproviders/timeline/timeline.service';
import {TimelineTitle} from '../../../core/domain/timelineTitle.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'chronicle.page.html',
    styleUrls: ['chronicle.page.scss']
})
export class ChroniclePage implements OnInit {

    private CHRONICLE_CATEGORY = 155;
    private timelineMapper: TimelineMapper = new TimelineMapper();

    heading: string;
    title = 'Spaß am Sport...';
    subTitle = '... ist das Motto des SC Dahenfeld. Und das schon seit 1946. Erfahre mehr über den SCD in dieser Chronik.';
    timeLineEntries: TimelineEntry[] = [];

    isLoading = true;
    isError = false;

    constructor(private activatedRoute: ActivatedRoute,
                private articleService: ArticleService,
                private timelineService: TimelineService) {

    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(
            queryParams => {
                this.heading = queryParams['heading'];
            }
        );

        // Load title if we get them from backend
        this.timelineService.loadTitles().subscribe({
            next: (timelineTitle: TimelineTitle) => {
                this.title = timelineTitle.title;
                this.subTitle = timelineTitle.subTitle;
            },
            error: (error) => {
                // We can't load the titles, but that's not so important as the articles
                console.error(error);
            }

        });

        // Load chronicle articles
        this.articleService.getArticlesByCategoryId(this.CHRONICLE_CATEGORY).subscribe({
            next: (articles: Article[]) => {

                for (let i = 0; i < articles.length; i++) {
                    this.timeLineEntries.push(this.timelineMapper.mapFrom(articles[i]));
                }

                this.isLoading = false;
            },
            error: (error) => {
                this.isError = true;
                console.error(error);
            }

        });

    }

}
