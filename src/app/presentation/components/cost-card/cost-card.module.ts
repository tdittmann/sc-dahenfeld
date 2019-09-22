import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CostCardComponent} from './cost-card.component';

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [CostCardComponent],
    exports: [CostCardComponent]
})
// TODO tdit0703: Komponenten zu Page ziehen, wohin sie gehören (außer shared components)
export class CostCardModule {

}
