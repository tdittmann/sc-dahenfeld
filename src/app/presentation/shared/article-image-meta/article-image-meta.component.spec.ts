import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticleImageMetaComponent } from './article-image-meta.component';
import { Article } from '../../../core/domain/article.model';

describe('ArticleImageMetaComponent', function () {
  let component: ArticleImageMetaComponent;
  let fixture: ComponentFixture<ArticleImageMetaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ArticleImageMetaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImageMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show category if no article is present', function () {
    fixture.detectChanges();
    expect(component.showCategory()).toBeFalsy();
  });

  it('should not show category if article category is blank', function () {
    const article: Article = new Article();
    component.article = article;
    fixture.detectChanges();
    expect(component.showCategory()).toBeFalsy();
  });

  it('should not show category if showOnlyTitle flag is set', function () {
    const article: Article = new Article();
    article.categoryName = 'Custom Category';
    component.article = article;
    component.showOnlyTitle = true;
    fixture.detectChanges();
    expect(component.showCategory()).toBeFalsy();
  });

  it('should show category if present', function () {
    const article: Article = new Article();
    article.categoryName = 'Custom Category';
    component.article = article;
    fixture.detectChanges();
    expect(component.showCategory()).toBeTruthy();
  });

  it('should not show author if no article is present', function () {
    fixture.detectChanges();
    expect(component.showAuthor()).toBeFalsy();
  });

  it('should not show author if article author is blank', function () {
    const article: Article = new Article();
    component.article = article;
    fixture.detectChanges();
    expect(component.showAuthor()).toBeFalsy();
  });

  it('should not show author if showOnlyTitle flag is set', function () {
    const article: Article = new Article();
    article.createdBy = 'Anonymous Creator';
    component.article = article;
    component.showOnlyTitle = true;
    fixture.detectChanges();
    expect(component.showAuthor()).toBeFalsy();
  });

  it('should show author if present', function () {
    const article: Article = new Article();
    article.createdBy = 'Anonymous Creator';
    component.article = article;
    fixture.detectChanges();
    expect(component.showAuthor()).toBeTruthy();
  });

  it('should not show meta if no article is present', function () {
    fixture.detectChanges();
    expect(component.showMeta()).toBeFalsy();
  });

  it('should not show meta if showOnlyTitle flag is set', function () {
    component.article = new Article();
    component.showOnlyTitle = true;
    fixture.detectChanges();
    expect(component.showMeta()).toBeFalsy();
  });

  it('should show meta if present', function () {
    component.article = new Article();
    fixture.detectChanges();
    expect(component.showMeta()).toBeTruthy();
  });
});
