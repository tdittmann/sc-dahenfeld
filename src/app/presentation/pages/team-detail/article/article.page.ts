import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../../../../core/domain/article.model';
import {ArticleService} from '../../../../dataproviders/article/article.service';
import {TeamInformationService} from '../../../../dataproviders/soccer/teamInformation.service';

@Component({
    selector: 'app-article',
    templateUrl: 'article.page.html',
    styleUrls: ['article.page.scss']
})
export class ArticlePage implements OnInit {

    article: Article;

    isLoading = true;
    isError = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private articleService: ArticleService,
                private teamInformationService: TeamInformationService) {

    }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                const teamInformationId = params['id'];
                this.teamInformationService.loadTeamInformation(teamInformationId).subscribe(teamInformation => {
                    const articleId = teamInformation.articleId;
                    if (articleId) {
                        this.articleService.getArticleById(articleId).subscribe({
                            next: article => {
                                this.article = article;
                                this.isLoading = false;
                            },
                            error: error => {
                                this.isError = true;
                                console.error(error);
                            }
                        });
                    } else {
                        this.router.navigate(['../ranking'], {queryParams: params, relativeTo: this.route});
                    }
                });
            }
        );
    }

}
