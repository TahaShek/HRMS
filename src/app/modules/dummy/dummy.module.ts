import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    DummyRoutingModule
  ]
})
export class DummyModule { }
