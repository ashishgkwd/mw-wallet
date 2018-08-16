import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransfersHomeComponent } from './transfers-home/transfers-home.component';

const routes: Routes = [
    {
        path:'',
        component: TransfersHomeComponent,
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
