import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {TextModule} from '../../common/text/text.module';
import { HomeComponent } from './home.component';
import {ButtonModule} from '../../common/button/button.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
