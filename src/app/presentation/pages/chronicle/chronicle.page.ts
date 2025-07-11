import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../dataproviders/article/article.service';
import { TimelineEntry } from '../../../core/domain/timeline-entry.model';
import { Article } from '../../../core/domain/article.model';
import { TimelineMapper } from '../../../dataproviders/timeline/timeline.mapper';
import { TimelineService } from '../../../dataproviders/timeline/timeline.service';
import { TimelineTitle } from '../../../core/domain/timelineTitle.model';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { PageStateComponent } from '../../shared/page-state/page-state.component';
import { IonicModule } from '@ionic/angular';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  templateUrl: 'chronicle.page.html',
  styleUrls: ['chronicle.page.scss'],
  imports: [PageHeaderComponent, PageStateComponent, IonicModule, TimelineComponent],
})
export class ChroniclePage implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly articleService = inject(ArticleService);
  private readonly timelineService = inject(TimelineService);

  private static readonly CHRONICLE_CATEGORY = 155;
  private readonly timelineMapper: TimelineMapper = new TimelineMapper();

  heading: string;
  title = 'Spaß am Sport...';
  subTitle = '... ist das Motto des SC Dahenfeld. Und das schon seit 1946. Erfahre mehr über den SCD in dieser Chronik.';
  timeLineEntries: TimelineEntry[] = [];

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.heading = queryParams['heading'];
    });

    // Load title if we get them from backend
    this.timelineService.loadTitles().subscribe({
      next: (timelineTitle: TimelineTitle) => {
        this.title = timelineTitle.title;
        this.subTitle = timelineTitle.subTitle;
      },
      error: (error) => {
        // We can't load the titles, but that's not so important as the articles
        console.error(error);
      },
    });

    // Load chronicle articles
    this.articleService.getArticlesByCategoryId(ChroniclePage.CHRONICLE_CATEGORY).subscribe({
      next: (articles: Article[]) => {
        for (let article of articles) {
          this.timeLineEntries.push(this.timelineMapper.mapFrom(article));
        }

        this.isLoading = false;
      },
      error: (error) => {
        this.isError = true;
        console.error(error);
      },
    });
  }
}
