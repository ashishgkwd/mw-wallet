import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PublicComponent } from './public.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {path: 'success', component: SuccessComponent},
            {path: 'error', component: ErrorComponent},
            {path: '', redirectTo: 'success', pathMatch: 'full'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
