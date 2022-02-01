import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {OverlayModule} from '@angular/cdk/overlay';


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
  ],
})
export class ModalModule { }
