import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../../core/domain/article.model';
import { ArticleJson } from './articleJson.model';
import { ArticleMapper } from './article.mapper';
import { HttpService } from '../http.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ArticleService {
  private readonly httpService = inject(HttpService);

  private readonly mapper: ArticleMapper = new ArticleMapper();

  getAllArticles(): Observable<Article[]> {
    return this.httpService.get<ArticleJson[]>(environment.backendUrl + 'articles').pipe(map((pAsc) => pAsc.map(this.mapper.mapFrom)));
  }

  getArticlesByCategoryId(categoryId: number): Observable<Article[]> {
    return this.httpService
      .get<ArticleJson[]>(environment.backendUrl + 'articles?categoryId=' + categoryId)
      .pipe(map((pAsc) => pAsc.map(this.mapper.mapFrom)));
  }

  getArticleById(articleId: string): Observable<Article> {
    return this.httpService
      .get<ArticleJson[]>(environment.backendUrl + 'article?id=' + articleId)
      .pipe(map((item) => item[0]))
      .pipe(map(this.mapper.mapFrom));
  }

  getArticlesById(articleIds: string[]): Observable<Article[]> {
    const queryParams = articleIds.join('&id[]=');

    return this.httpService
      .get<ArticleJson[]>(environment.backendUrl + 'article?id[]=' + queryParams)
      .pipe(map((pArticle) => pArticle.map(this.mapper.mapFrom)));
  }

  incrementMobileHitsForArticle(pArticle: Article): void {
    this.httpService.post<ArticleJson>(environment.backendUrl + 'article', this.mapper.mapTo(pArticle)).subscribe({
      next: (pResponse) => {
        // Nothing to do
      },
      error: (error) => console.error(error),
    });
  }
}
