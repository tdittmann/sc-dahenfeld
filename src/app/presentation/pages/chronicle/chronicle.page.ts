import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../dataproviders/article/article.service';
import {TimelineEntry} from '../../../core/domain/timeline-entry.model';
import {Article} from '../../../core/domain/article.model';
import {TimelineMapper} from '../../../dataproviders/timeline/timeline.mapper';
import {TimelineService} from '../../../dataproviders/timeline/timeline.service';
import {TimelineTitle} from '../../../dataproviders/timeline/timelineTitle.model';

@Component({
    selector: 'chronicle',
    templateUrl: 'chronicle.page.html',
    styleUrls: ['chronicle.page.scss']
})
export class ChroniclePage implements OnInit {

    private CHRONICLE_CATEGORY = 155;
    private timelineMapper: TimelineMapper = new TimelineMapper();

    title = 'Spaß am Sport...';
    subTitle = '... ist das Motto des SC Dahenfeld. Und das schon seit 1946. Erfahre mehr über den SCD in dieser Chronik.';
    timeLineEntries: TimelineEntry[] = [];

    constructor(private articleService: ArticleService,
                private timelineService: TimelineService) {

    }

    ngOnInit(): void {

        // Load title if we get them from backend
        this.timelineService.loadTitles().subscribe(
            (timelineTitle: TimelineTitle) => {
                this.title = timelineTitle.title;
                this.subTitle = timelineTitle.subTitle;
            },
            (error) => {
                console.error(error);
            }
        );

        // Load chronicle articles
        this.articleService.getAllArticles(this.CHRONICLE_CATEGORY).subscribe(
            (articles: Article[]) => {

                for (let i = 0; i < articles.length; i++) {
                    this.timeLineEntries.push(this.timelineMapper.mapFrom(articles[i]));
                }

            },
            (error) => {
                // TODO tdit0703: Error handling
                console.error(error);
            }
        );

    }

}
