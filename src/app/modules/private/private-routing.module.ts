import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { CanDeactivateGuard } from 'src/app/core/guards/route.guard';

const routes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        canActivateChild: [CanDeactivateGuard],
        children: [
            {path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
            {path: 'topup', loadChildren: '../topup/topup.module#TopupModule'},
            {path: 'transfers', loadChildren: '../transfers/transfers.module#TransfersModule'},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
