import {NgModule} from '@angular/core';
import {TabComponent} from './components/tab/tab.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {CommonModule} from '@angular/common';
import {VariableContentComponent} from './components/variable-content/variable-content.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabsComponent,
        TabComponent,
        VariableContentComponent
    ],
    exports: [
        TabsComponent,
        TabComponent,
    ]
})
export class TabsModule {
}