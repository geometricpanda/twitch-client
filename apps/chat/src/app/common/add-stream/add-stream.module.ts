import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AddStreamComponent} from './add-stream.component';
import {TextModule} from '../text/text.module';
import {ButtonModule} from '../button/button.module';


@NgModule({
  declarations: [
    AddStreamComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddStreamComponent,
  ],
})
export class AddStreamModule {
}
