import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/components/shell/shell.component';

const routes: Routes = [
  {path:'home', component:ShellComponent},
  {path:'topup', loadChildren: './modules/topup/topup.module#TopupModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
