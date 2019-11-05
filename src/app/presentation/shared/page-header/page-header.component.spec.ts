import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {PageHeaderComponent} from './page-header.component';

describe('PageHeaderComponent', function () {

    let component: PageHeaderComponent;
    let fixture: ComponentFixture<PageHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageHeaderComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should show logo if no text is provided', function () {
        component.title = '';
        fixture.detectChanges();
        expect(component.showLogo()).toBeTruthy();
    });

    it('should not show logo if text is provided', function () {
        component.title = 'Sample title';
        fixture.detectChanges();
        expect(component.showLogo()).toBeFalsy();
    });
});
