import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {map} from 'rxjs/operators';
import {Article} from '../../core/domain/article.model';
import {ArticleJson} from './articleJson.model';
import {ArticleMapper} from './article.mapper';

@Injectable()
export class ArticleService {

    mapper: ArticleMapper = new ArticleMapper();

    constructor(private http: HttpClient) {

    }

    getAllArticles(categoryId: number): Observable<Article[]> {
        return this.http
            .get<ArticleJson[]>(environment.backendUrl + 'news?categoryId=' + categoryId)
            .pipe(map(pAsc => pAsc.map(this.mapper.mapFrom)));
    }

    getArticle(articleId: string): Observable<Article> {
        return this.http
            .get<ArticleJson[]>(environment.backendUrl + 'news?id=' + articleId)
            .pipe(map(item => item[0]))
            .pipe(map(this.mapper.mapFrom));
    }

    incrementMobileHitsForArticle(pArticle: Article): void {
        this.http
            .post<ArticleJson>(environment.backendUrl + 'news', JSON.stringify(this.mapper.mapTo(pArticle)))
            .subscribe(
                pResponse => {},
                pError => console.error(pError),
            );
    }

}
