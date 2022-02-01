import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {StreamsGuard} from './common/streams.guard';

const Home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./screens/home/home.module').then(mod => mod.HomeModule),
}

const Streams: Route = {
  path: 'streams',
  canActivateChild: [StreamsGuard],
  loadChildren: () => import('./screens/streams/streams.module').then(mod => mod.StreamsModule),
}

const routes: Routes = [
  Home,
  Streams,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
