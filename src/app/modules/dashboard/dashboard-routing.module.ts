import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { DashboardHomeContainerComponent } from './containers/dashboard-home-container/dashboard-home-container.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardContainerComponent,
        children: [
            {path: 'home', component: DashboardHomeContainerComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
