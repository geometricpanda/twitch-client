import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StreamComponent} from './stream.component';
import {TextModule} from '../text/text.module';
import {ChannelPipe} from './channel.pipe';


@NgModule({
  declarations: [
    StreamComponent,
    ChannelPipe,
  ],
  exports: [
    StreamComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
  ],
})
export class StreamModule {
}
