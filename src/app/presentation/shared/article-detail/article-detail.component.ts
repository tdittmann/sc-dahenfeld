import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { Article } from '../../../core/domain/article.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleImageMetaComponent } from '../article-image-meta/article-image-meta.component';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.scss'],
  imports: [ArticleImageMetaComponent],
})
export class ArticleDetailComponent implements OnInit, AfterViewInit {
  private readonly sanitized = inject(DomSanitizer);

  @Input() article: Article;
  @Input() showOnlyTitle: boolean;
  @Input() showHeader = true;

  articleContent: any;

  ngOnInit(): void {
    const text = this.showHeader ? this.article.getTextWithoutFirstImage() : this.article.text;
    this.articleContent = this.sanitized.bypassSecurityTrustHtml(text);
  }

  ngAfterViewInit() {
    // Needed for accordions, so they can be opened
    document.querySelectorAll('[data-toggle="collapse"]').forEach((value, key) => {
      value.addEventListener('click', (event: any) => {
        const clickedElement = event.currentTarget;

        const targetElement = document.getElementById(clickedElement.getAttribute('data-target').substring(1));

        if (targetElement.classList.contains('in')) {
          clickedElement.classList.add('collapsed');
          targetElement.classList.remove('in');
          targetElement.style.display = 'none';
          targetElement.style.height = '0';
        } else {
          clickedElement.classList.remove('collapsed');
          targetElement.classList.add('in');
          targetElement.style.display = 'block';
          targetElement.style.height = '100%';
        }
      });
    });
  }
}
