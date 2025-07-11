import { Component, Input } from '@angular/core';
import { Article } from '../../../core/domain/article.model';
import { IonicModule } from '@ionic/angular';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-article-card',
  templateUrl: 'article-card.component.html',
  styleUrls: ['article-card.component.scss'],
  imports: [IonicModule, NgStyle],
})
export class ArticleCardComponent {
  @Input() type: 'large' | 'small' = 'small';
  @Input() article: Article;
}
