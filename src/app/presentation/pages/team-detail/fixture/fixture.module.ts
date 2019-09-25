import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {FixturePage} from './fixture.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [FixturePage],
    exports: [FixturePage],
    entryComponents: [FixturePage],
})
export class FixturePageModule {
}
