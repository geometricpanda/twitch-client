import {Component, HostBinding, Input} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[button]',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @HostBinding('class.button')
  private readonly hostClassButton = true;

  @HostBinding('class.button--outline')
  get hostClassButtonOutline(): boolean {
    return coerceBooleanProperty(this.outline);
  }

  @HostBinding('class.button--round')
  get hostClassButtonRound(): boolean {
    return coerceBooleanProperty(this.round);
  }

  @HostBinding('class.button--state-warning')
  get hostClassButtonStateWarning(): boolean {
    return this.state === 'warning';
  }

  @HostBinding('class.button--state-error')
  get hostClassButtonStateError(): boolean {
    return this.state === 'error';
  }

  @Input()
  round: boolean | string = false

  @Input()
  outline: boolean | string = false

  @Input()
  state?: 'error' | 'warning'

}
