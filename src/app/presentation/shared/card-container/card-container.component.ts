import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-container',
    templateUrl: 'card-container.component.html',
    styleUrls: ['card-container.component.scss'],
    standalone: false
})
export class CardContainerComponent implements OnInit {
  @Input() heading = '';
  @Input() subHeading = '';

  @Input() actAsAccordion = false;
  @Input() accordionInitiallyOpen = true;

  isContentVisible = true;

  ngOnInit(): void {
    this.isContentVisible = this.accordionInitiallyOpen;
  }

  toggleContent() {
    if (this.actAsAccordion) {
      this.isContentVisible = !this.isContentVisible;
    }
  }
}
