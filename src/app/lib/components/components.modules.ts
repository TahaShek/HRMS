import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
    imports: [
      CommonModule,
      PrimeModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,

    ],
    declarations: [

    ],
  
    exports: [

    ],
  })
  export class ComponentsModule {}