import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
