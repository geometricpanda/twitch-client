import {Component, HostBinding, Input} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[text]',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./text.component.css'],
})
export class TextComponent {

  @HostBinding('class.text')
  private readonly hostClassText = true

  @HostBinding('class.text--size-sm')
  get hostClassTextSizeSm(): boolean {
    return this.size === 'sm';
  }

  @HostBinding('class.text--size-md')
  get hostClassTextSizeMd(): boolean {
    return this.size === 'md';
  }

  @HostBinding('class.text--size-lg')
  get hostClassTextSizeLg(): boolean {
    return this.size === 'lg';
  }

  @HostBinding('class.text--size-xl')
  get hostClassTextSizeXl(): boolean {
    return this.size === 'xl';
  }

  @HostBinding('class.text--size-xxl')
  get hostClassTextSizeXxl(): boolean {
    return this.size === 'xxl';
  }

  @HostBinding('class.text--weight-light')
  get hostClassTextWeightLight(): boolean {
    return this.weight === 'light';
  }

  @HostBinding('class.text--weight-regular')
  get hostClassTextWeightRegular(): boolean {
    return this.weight === 'regular';
  }

  @HostBinding('class.text--weight-medium')
  get hostClassTextWeightMedium(): boolean {
    return this.weight === 'medium';
  }

  @HostBinding('class.text--weight-semi-bold')
  get hostClassTextWeightSemiBold(): boolean {
    return this.weight === 'semi-bold';
  }

  @HostBinding('class.text--weight-bold')
  get hostClassTextWeightBold(): boolean {
    return this.weight === 'bold';
  }

  @HostBinding('class.text--margin-bottom')
  get hostClassTextMarginBottom(): boolean {
    return coerceBooleanProperty(this.marginBottom);
  }

  @HostBinding('class.text--state-error')
  get hostClassTextStateError(): boolean {
    return this.state === 'error';
  }

  @HostBinding('class.text--state-success')
  get hostClassTextStateSuccess(): boolean {
    return this.state === 'success';
  }

  @HostBinding('class.text--state-mute')
  get hostClassTextStateMute(): boolean {
    return this.state === 'mute';
  }

  @Input()
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md';

  @Input()
  weight: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold' = 'regular';

  @Input()
  marginBottom: boolean | string = false;

  @Input()
  state?: 'error' | 'success' | 'mute';

}
