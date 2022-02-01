import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrameComponent} from './frame.component';


@NgModule({
  declarations: [
    FrameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FrameComponent,
  ]
})
export class FrameModule { }
