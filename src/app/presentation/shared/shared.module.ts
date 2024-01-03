import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CardContainerComponent} from './card-container/card-container.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [CardContainerComponent],
    exports: [CardContainerComponent]
})
export class SharedModule {
}
