import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {
    constructor(private _cdr: ChangeDetectorRef,
                private _router: Router,
                private _activatedRoute: ActivatedRoute) {
    }

    @ContentChildren(TabComponent) tabs: any;
    @Input() fixed = true;
    @Output() tabSelected = new EventEmitter<{ index: number, tab: TabComponent }>();

    ngAfterContentInit() {

        // Check if we have a tab in the URL. If yes, open the tab.
        const queryParamsSubscription = this._activatedRoute.queryParams.subscribe(value => {
            const activeTab = value['tab'];
            if (activeTab) {
                this.tabs.forEach((tab, index) => {
                    if (tab.tabTitle === activeTab) {
                        this.selectTab(tab, index);
                    }
                });
            }
        });
        queryParamsSubscription.unsubscribe();

        this.tabs.changes.subscribe(res => {
            this.adjustTabs(res);
        });
        this.adjustTabs(this.tabs);

    }

    selectTab(tab: TabComponent, index: number) {

        if (tab.disabled) {
            return;
        }

        // Add the tab title to the URL
        const queryParams = {tab: tab.tabTitle};
        this._router.navigate(
            [],
            {
                relativeTo: this._activatedRoute,
                queryParams,
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }
        );

        this.tabs.forEach((tabComponent, tabIndex) => tabComponent.active = tabIndex === index);
        this.tabSelected.emit({index, tab});
    }

    adjustTabs(entry) {
        let hasActive = false;

        entry.forEach(tab => {
            if (tab.active) {
                hasActive = true;
            }
        });

        if (!hasActive) {
            entry.first.active = true;
        }

        this._cdr.markForCheck();
    }

}
