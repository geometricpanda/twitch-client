import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {FrameModule} from '../../common/frame/frame.module';
import {ModalModule} from '../../common/modal/modal.module';
import {AddStreamModule} from '../../common/add-stream/add-stream.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FrameModule,
    ModalModule,
    AddStreamModule,
  ],
})
export class HomeModule {
}
