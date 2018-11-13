import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [SuccessComponent, ErrorComponent, PublicComponent]
})
export class PublicModule { }
