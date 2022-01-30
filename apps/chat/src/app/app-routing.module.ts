import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const Home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./screens/home/home.module').then(mod => mod.HomeModule),
}

const Screens: Route = {
  path: 'screens',
  loadChildren: () => import('./screens/streams/streams.module').then(mod => mod.StreamsModule),
}

const routes: Routes = [
  Home,
  Screens,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
