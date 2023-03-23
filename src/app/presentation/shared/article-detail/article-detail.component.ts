import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../core/domain/article.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'article-detail',
    templateUrl: 'article-detail.component.html',
    styleUrls: ['article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, AfterViewInit {

    @Input() article: Article;
    @Input() showOnlyTitle: boolean;
    @Input() showHeader = true;

    articleContent: any;

    constructor(private sanitized: DomSanitizer) {
    }

    ngOnInit(): void {
        console.log(this.showHeader)
        const text = (this.showHeader)
            ? this.article.getTextWithoutFirstImage()
            : this.article.text;
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
