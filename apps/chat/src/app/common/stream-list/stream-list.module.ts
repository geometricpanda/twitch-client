import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StreamListComponent} from './stream-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    StreamListComponent,
  ],
  exports: [
    StreamListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class StreamListModule { }
