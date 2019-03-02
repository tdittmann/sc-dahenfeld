import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleCardComponent} from './article-card.component';

describe('ArticleCardComponent', () => {
    let component: ArticleCardComponent;
    let fixture: ComponentFixture<ArticleCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArticleCardComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show image if present', () => {
        // Nothing set
        fixture.detectChanges();
        expect(component.showImage()).toBeFalsy();

        // Empty
        component.image = '';
        fixture.detectChanges();
        expect(component.showImage()).toBeFalsy();

        // Blank
        component.image = '        ';
        fixture.detectChanges();
        expect(component.showImage()).toBeFalsy();

        // Filled
        component.image = 'image-url';
        fixture.detectChanges();
        expect(component.showImage()).toBeTruthy();
    });

    it('should show subTitle if present', () => {
        // Nothing set
        fixture.detectChanges();
        expect(component.showSubTitle()).toBeFalsy();

        // Empty
        component.subTitle = '';
        fixture.detectChanges();
        expect(component.showSubTitle()).toBeFalsy();

        // Blank
        component.subTitle = '        ';
        fixture.detectChanges();
        expect(component.showSubTitle()).toBeFalsy();

        // Filled
        component.subTitle = 'subTitle';
        fixture.detectChanges();
        expect(component.showSubTitle()).toBeTruthy();
    });

    it('should show category if present', () => {
        // Nothing set
        fixture.detectChanges();
        expect(component.showCategory()).toBeFalsy();

        // Empty
        component.category = '';
        fixture.detectChanges();
        expect(component.showCategory()).toBeFalsy();

        // Blank
        component.category = '        ';
        fixture.detectChanges();
        expect(component.showCategory()).toBeFalsy();

        // Filled
        component.category = 'sample category';
        fixture.detectChanges();
        expect(component.showCategory()).toBeTruthy();
    });

    it('should show footerIcon if present', () => {
        // Nothing set
        fixture.detectChanges();
        expect(component.showFooterIcon()).toBeFalsy();

        // Empty
        component.footerIcon = '';
        fixture.detectChanges();
        expect(component.showFooterIcon()).toBeFalsy();

        // Blank
        component.footerIcon = '        ';
        fixture.detectChanges();
        expect(component.showFooterIcon()).toBeFalsy();

        // Filled
        component.footerIcon = 'pin';
        fixture.detectChanges();
        expect(component.showFooterIcon()).toBeTruthy();
    });

    it('should show footer if present', () => {
        // Nothing set
        fixture.detectChanges();
        expect(component.showFooter()).toBeFalsy();

        // Empty
        component.footerText = '';
        fixture.detectChanges();
        expect(component.showFooter()).toBeFalsy();

        // Blank
        component.footerText = '        ';
        fixture.detectChanges();
        expect(component.showFooter()).toBeFalsy();

        // Filled
        component.footerText = 'Made with blood';
        fixture.detectChanges();
        expect(component.showFooter()).toBeTruthy();
    });

});
