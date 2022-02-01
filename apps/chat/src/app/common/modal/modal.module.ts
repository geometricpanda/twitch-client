import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    ModalComponent,
  ],
  exports: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
  ],
})
export class ModalModule { }
