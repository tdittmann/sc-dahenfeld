import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ErrorComponent} from './error.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [ErrorComponent],
    exports: [ErrorComponent]
})
export class ErrorModule {

}
