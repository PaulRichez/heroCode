import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ToolbarModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PaginatorModule
  ]
})
export class MainModule { }
