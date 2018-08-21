import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { DashboardHomeContainerComponent } from './containers/dashboard-home-container/dashboard-home-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardContainerComponent, DashboardHomeContainerComponent]
})
export class DashboardModule { }
