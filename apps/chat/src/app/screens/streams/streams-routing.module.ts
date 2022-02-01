import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {StreamsComponent} from './streams.component';

const Index: Route = {
  path: '',
  component: StreamsComponent,
}

const Stream: Route = {
  path: ':id',
  component: StreamsComponent,
}

const routes: Routes = [
  Index,
  Stream,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamsRoutingModule {
}
