import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @HostBinding('class.button')
  private readonly hostClassButton = true;

}
