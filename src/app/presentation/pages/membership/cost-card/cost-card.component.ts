import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cost-card',
  templateUrl: 'cost-card.component.html',
  styleUrls: ['cost-card.component.scss'],
  imports: [IonicModule],
})
export class CostCardComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() footer: string;
}
