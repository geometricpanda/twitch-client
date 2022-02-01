import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const Index: Route = {
  path: '',
  component: HomeComponent,
}

const routes: Routes = [
  Index,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
