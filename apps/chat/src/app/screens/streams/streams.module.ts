import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {StreamsRoutingModule} from './streams-routing.module';
import {StreamsComponent} from './streams.component';
import {FrameModule} from '../../common/frame/frame.module';
import {TextModule} from '../../common/text/text.module';
import {StreamModule} from '../../common/stream/stream.module';
import {StreamListModule} from '../../common/stream-list/stream-list.module';
import {ButtonModule} from '../../common/button/button.module';
import {ModalModule} from '../../common/modal/modal.module';
import {AddStreamModule} from '../../common/add-stream/add-stream.module';


@NgModule({
  declarations: [
    StreamsComponent,
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    FrameModule,
    TextModule,
    StreamModule,
    StreamListModule,
    ButtonModule,
    ModalModule,
    AddStreamModule,
    FontAwesomeModule,
  ],
})
export class StreamsModule {
}
