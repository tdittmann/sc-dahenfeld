import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {PageHeaderComponent} from './page-header.component';
import {ErrorService} from '../error/error.service';
import {LoadingService} from '../loading/loading.service';

describe('PageHeaderComponent', function () {

    let component: PageHeaderComponent;
    let fixture: ComponentFixture<PageHeaderComponent>;
    let errorServiceSpy, loadingServiceSpy;

    beforeEach(async(() => {
        errorServiceSpy = jasmine.createSpyObj('ErrorService', ['isError']);
        loadingServiceSpy = jasmine.createSpyObj('LoadingService', ['isLoading']);


        TestBed.configureTestingModule({
            declarations: [PageHeaderComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [
                {provide: ErrorService, useValue: errorServiceSpy},
                {provide: LoadingService, useValue: loadingServiceSpy}
            ]
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
