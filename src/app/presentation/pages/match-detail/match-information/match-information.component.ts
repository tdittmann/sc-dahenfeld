import { Component, inject, Input } from "@angular/core";
import { CardContainerComponent } from '../../../shared/card-container/card-container.component';
import { ListItemComponent } from '../../../shared/list-item/list-item.component';
import { DevService } from "../../../../dataproviders/dev.service";

@Component({
  selector: 'app-match-information',
  templateUrl: 'match-information.component.html',
  imports: [CardContainerComponent, ListItemComponent],
})
export class MatchInformationComponent {
  private readonly devService = inject(DevService);

  @Input() date: string;
  @Input() location: string;
  @Input() fixture: string;
  @Input() refereeName: string | undefined;

  isDevModeEnabled(): boolean {
    return this.devService.isDevModeEnabled();
  }
}
