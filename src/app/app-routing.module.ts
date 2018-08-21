import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/components/shell/shell.component';

const routes: Routes = [
  {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
  {path: 'topup', loadChildren: './modules/topup/topup.module#TopupModule'},
  {path: 'transfers', loadChildren: './modules/transfers/transfers.module#TransfersModule'},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
